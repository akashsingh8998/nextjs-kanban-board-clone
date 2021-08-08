import React, {useState} from 'react';
import List from '../../organisms/List';

const Board = ({boardData,addNewCardData}) => {

  return (
    <div>
      <div className="boardContainer">
        {Object.keys(boardData).map((listKey) => {
          return <List listData={{...boardData[listKey], id: listKey}} key={listKey} addNewCardData={addNewCardData}/> 
        })}
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
