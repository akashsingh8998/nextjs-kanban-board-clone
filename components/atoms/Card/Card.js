import React, { useState } from 'react';
import { Card, Typography } from 'antd';
import { Draggable } from 'react-beautiful-dnd';

const CardComp = ({cardData,index}) => {
    const {Text} = Typography;

    return(
        <Draggable draggableId={cardData?.id} index={index}>
            {(provided) => (
                <div
                    ref={provided.innerRef}
                    {...provided.dragHandleProps}
                    {...provided.draggableProps}
                >
                    <div className="cardDiv">
                        <Card bordered={false} bodyStyle={{padding: '5px 10px'}}>
                            <Text>{cardData?.title}</Text>
                        </Card>
                        <style jsx>{`
                            .cardDiv {
                                margin-bottom: 8px;
                            }
                        `}</style>
                    </div>
                </div>
            )}
        </Draggable>
    )
};

export default CardComp;