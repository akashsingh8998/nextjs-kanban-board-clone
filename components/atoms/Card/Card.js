import React, { useState } from 'react';
import { Card, Typography } from 'antd';

const CardComp = ({cardData}) => {
    const {Text} = Typography;

    return(
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
    );
};

export default CardComp;