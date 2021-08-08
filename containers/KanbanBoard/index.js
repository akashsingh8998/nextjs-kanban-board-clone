import React, {useState} from 'react';
import KanbanBoard from '../../components/templates/KanbanBoard';
import Layout from '../../components/templates/Layout';
import kanbanBoardData from '../../utils/mockData/kanbanBoardData';
import { cloneDeep } from 'lodash';

const mockKanbanData = cloneDeep(kanbanBoardData);

const Board = () => {
  const [boardData, setBoardData] = useState(mockKanbanData);
  const [filteredBoardData, setFilteredBoardData] = useState(null);

  const addNewCardData = (listId, cardTitle) => {
    const cardId = `card-${new Date().getTime()}`;
    let boardDataCopy = {...boardData};
    boardDataCopy[listId].cards[cardId] = {id: cardId, title: cardTitle};
    setBoardData(boardDataCopy);
  }

  const addNewList = (listTitle) => {
    const listId = `list-${new Date().getTime()}`;
    let boardDataCopy = {...boardData};
    boardDataCopy[listId] = {id: listId, title: listTitle, cards: {}};
    setBoardData(boardDataCopy);
  }

  const searchHandler = (searchtext) => {
    if(searchtext){
      let filteredList = cloneDeep(boardData);
      const boardDataCopy = cloneDeep(boardData);
      Object.keys(boardDataCopy).map((listKey) => {
        const cardList = {};
        Object.keys(boardDataCopy[listKey].cards).map((cardKey) => {
          if(boardDataCopy[listKey].cards[cardKey].title.toLowerCase().includes(searchtext.toLowerCase())){
            cardList[cardKey] = {...boardDataCopy[listKey].cards[cardKey]};
          }
        });
        filteredList[listKey].cards = {...cardList};
      });
      setFilteredBoardData(filteredList);
    }else{
      setFilteredBoardData(null);
    }
  }

  return (
    <Layout title="Kanban Bord" searchHandler={searchHandler}>
      <KanbanBoard 
        boardData={filteredBoardData || boardData} 
        addNewCardData={addNewCardData} 
        addNewList={addNewList}
      />
    </Layout>
  )
};

export default Board;
