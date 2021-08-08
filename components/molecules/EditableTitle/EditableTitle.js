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
                <Text strong onClick={clickAndBlurHandler}>{titleStr}</Text>
            )}
            
            <style jsx>{`
                .listContent {
                    padding: 5px 10px;
                }
            `}</style>
        </div>
    );
};

export default EditableTitle;