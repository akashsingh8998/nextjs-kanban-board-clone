import React from 'react';
import AddList from '../../molecules/AddList';
import List from '../../organisms/List';

const Board = ({boardData,addNewCardData,addNewList}) => {

  return (
    <div>
      <div className="boardContainer">
        {Object.keys(boardData).map((listKey) => {
          return <List listData={{...boardData[listKey], id: listKey}} key={listKey} addNewCardData={addNewCardData}/> 
        })}
        <AddList addNewList={addNewList}/>
      </div>
      <style jsx>{`
        .boardContainer {
          display: flex;
        }
      `}</style>
    </div>
  )
};

export default Board;
