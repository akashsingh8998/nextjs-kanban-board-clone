import React, { useState } from 'react';
import { Input, Typography } from 'antd';

const Title = ({}) => {
    const { Text, Paragraph } = Typography;
    const [titleStr, setTitleStr] = useState("hello");
    const [editable, setEditable] = useState(false);

    const clickAndBlurHandler = () => {
        setEditable(!editable);
    }

    return(
        <div className="">
            {editable ? (
                <Input defaultValue={titleStr} onBlur={clickAndBlurHandler} onChange={(event) => {setTitleStr(event.target.value)}}/>
            ) : (
                <Text onClick={clickAndBlurHandler}>{titleStr}</Text>
            )}
            
            <style jsx>{`
                .listContent {
                    padding: 5px 10px;
                }
            `}</style>
        </div>
    );
};

export default Title;