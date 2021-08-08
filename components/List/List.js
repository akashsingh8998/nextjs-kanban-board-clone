import React, { useState } from 'react';
import Title from '../Title'
import { Card, Row, Col, List } from 'antd';
import { DashOutlined } from '@ant-design/icons';

const ListComp = ({}) => {

    return(
        <div className="listWrapper">
            <div className="list">
                <div className="listContent">
                    <div className="listHeader">
                        <Title/>
                        <DashOutlined style={{ fontSize: '21px', color: '#08c' }}/>
                    </div>
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
                    padding: 5px 10px;
                }
                .listHeader {
                    display: flex;
                    justify-content: space-between;
                }
            `}</style>
        </div>
    );
};

export default ListComp;