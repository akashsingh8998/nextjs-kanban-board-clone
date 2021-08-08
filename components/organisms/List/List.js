import React, { useState } from 'react';
import EditableTitle from '../../molecules/EditableTitle';
import Card from '../../atoms/Card';
import AddCard from '../../molecules/AddCard/AddCard';
import { DashOutlined } from '@ant-design/icons';

const ListComp = ({}) => {

    return(
        <div className="listWrapper">
            <div className="list">
                <div className="listContent">
                    <div className="listHeader">
                        <div className="listTitle"><EditableTitle/></div>
                        <DashOutlined style={{ fontSize: '21px', color: '#08c' }}/>
                    </div>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <AddCard/>
                </div>
            </div>
            <style jsx>{`
                .listWrapper {
                    width: 272px;
                    margin: 0 4px;
                    height: 100%;
                }
                .list {
                    background-color: #ebecf0;
                    border-radius: 3px;
                    display: flex;
                    flex-direction: column;
                    max-height: 100%;
                    position: relative;
                    white-space: normal;
                }
                .listContent {
                    padding: 10px;
                }
                .listHeader {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 10px;
                }.listTitle {
                    padding-left: 12px; 
                }
            `}</style>
        </div>
    );
};

export default ListComp;