import React, {useState,useEffect} from 'react';
import dynamic from 'next/dynamic';
import Layout from '../../components/templates/Layout';
import kanbanBoardData from '../../utils/mockData/kanbanBoardData';
import { cloneDeep } from 'lodash';
import { DragDropContext } from 'react-beautiful-dnd';

const mockKanbanData = cloneDeep(kanbanBoardData);

const Board = () => {
  const [boardData, setBoardData] = useState(mockKanbanData);
  const [filteredBoardData, setFilteredBoardData] = useState(null);
  const [KanbanBoardComp, setKanbanBoardComp] = useState(null);

  useEffect(() => {
    let comp = dynamic(
      () =>
        import('../../components/templates/KanbanBoard'),
      {
        loading: () => (
          <p>Please wait...</p>
        ),
      },
    );
    setKanbanBoardComp(comp);
  }, [])

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

  const dragEndHandler = (result) => {
    if(result?.destination && (result?.destination?.droppableId !== result?.source?.droppableId)){
      console.log("res",result);
      const boardDataCopy = cloneDeep(boardData);
      boardDataCopy[result?.destination?.droppableId].cards[result?.draggableId] = {...boardDataCopy[result?.source?.droppableId].cards[result?.draggableId]};
      delete boardDataCopy[result?.source?.droppableId].cards[result?.draggableId];
      setBoardData(boardDataCopy);
    }
  }

  return (
    <Layout title="Kanban Bord" searchHandler={searchHandler}>
      {KanbanBoardComp && 
        <DragDropContext onDragEnd={dragEndHandler}>
          <KanbanBoardComp 
            boardData={filteredBoardData || boardData} 
            addNewCardData={addNewCardData} 
            addNewList={addNewList}
          />
        </DragDropContext>

      }
    </Layout>
  )
};

export default Board;
