import React, { useState } from 'react';
import { Input, Typography } from 'antd';

const EditableTitle = ({title}) => {
    const { Text, Paragraph } = Typography;
    const [titleStr, setTitleStr] = useState(title);
    const [editable, setEditable] = useState(false);

    const clickAndBlurHandler = () => {
        setEditable(!editable);
    }

    return(
        <div>
            {editable ? (
                <Input defaultValue={titleStr} onBlur={clickAndBlurHandler} onChange={(event) => {setTitleStr(event.target.value)}}/>
            ) : (
                <div><Text strong onClick={clickAndBlurHandler}>{titleStr}</Text></div>
            )}
            
            <style jsx>{`
                .listContent {
                    padding: 5px 10px;
                }
                .ant-typography {
                    color: #172b4d;
                }
            `}</style>
        </div>
    );
};

export default EditableTitle;