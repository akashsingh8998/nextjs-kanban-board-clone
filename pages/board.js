import React, {useState} from 'react';
import Layout from '../components/templates/Layout';
import KanbanBoard from '../containers/KanbanBoard';
import kanbanBoardData from '../utils/mockData/kanbanBoardData';

const Board = () => {
  const [boardData, setBoardData] = useState(kanbanBoardData);

  return (
    <Layout title="New page">
      <KanbanBoard/>
    </Layout>
  )
};

export default Board;
