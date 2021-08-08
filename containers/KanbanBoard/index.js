import React, {useState} from 'react';
import KanbanBoard from '../../components/templates/KanbanBoard';
import kanbanBoardData from '../../utils/mockData/kanbanBoardData';

const Board = () => {
  const [boardData, setBoardData] = useState(kanbanBoardData);
  console.log(kanbanBoardData);

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

  return (
    <KanbanBoard boardData={boardData} addNewCardData={addNewCardData} addNewList={addNewList}/>
  )
};

export default Board;
