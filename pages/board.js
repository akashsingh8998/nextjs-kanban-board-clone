import React, { useState, useEffect, useContext } from 'react';
import { DatePicker } from 'antd';
import Layout from '../components/Layout';
import List from '../components/List';

export default function Board() {
  return (
    <Layout title="New page">
      <List/>
    </Layout>
  )
}
