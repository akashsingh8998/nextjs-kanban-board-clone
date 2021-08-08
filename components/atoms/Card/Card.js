import React, { useState } from 'react';
import { Card, Typography } from 'antd';

const CardComp = ({}) => {
    const {Text} = Typography;

    return(
        <div className="cardDiv">
            <Card bordered={false} bodyStyle={{padding: '5px 10px'}}>
                <Text>Card content</Text>
            </Card>
            <style jsx>{`
                .cardDiv {
                    margin-bottom: 5px;
                }
            `}</style>
        </div>
    );
};

export default CardComp;