import React from 'react';
import Layout from '../components/templates/Layout';
import KanbanBoard from '../containers/KanbanBoard';
import kanbanBoardData from '../utils/mockData/kanbanBoardData';

const Board = () => {
  return (
    <Layout title="Kanban Bord">
      <KanbanBoard/>
    </Layout>
  )
};

export default Board;
