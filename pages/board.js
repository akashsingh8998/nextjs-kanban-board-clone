import React, {useState} from 'react';
import Layout from '../components/templates/Layout';
import List from '../components/organisms/List';
import kanbanBoardData from '../utils/mockData/kanbanBoardData';

const Board = () => {
  const [boardData, setBoardData] = useState(kanbanBoardData);

  return (
    <Layout title="New page">
      <div className="boardContainer">
        {Object.keys(boardData).map((listKey) => {
          return <List listData={{...boardData[listKey], id: listKey}} key={listKey}/> 
        })}
      </div>
      <style jsx>{`
        .boardContainer {
          display: flex;
        }
      `}</style>
    </Layout>
  )
};

export default Board;
