import React, { useState } from 'react';
import { Input, Typography, Button } from 'antd';
import { PlusOutlined,CloseOutlined } from '@ant-design/icons';


const AddCard = ({}) => {
    const { TextArea } = Input;
    const [open, setOpen] = useState(false);
    const [cardTitle, setCardTitle] = useState("hello");

    const clickAndBlurHandler = () => {
        setOpen(!open);
    }

    return(
        <div>
            {open ? (
                <div>
                    <div className="inputContainer">
                        <TextArea 
                            defaultValue={cardTitle} 
                            onBlur={clickAndBlurHandler} 
                            onChange={(event) => {setCardTitle(event.target.value)}}
                        />
                    </div>
                    <Button type="primary" onClick={clickAndBlurHandler}>Add card</Button>
                    <Button type="text" icon={<CloseOutlined />} onClick={clickAndBlurHandler}/>
                </div>
            ) : (
                <Button 
                    type="text" 
                    icon={<PlusOutlined />} 
                    style={{color: '#5e6c84', textAlign: 'left'}} 
                    onClick={clickAndBlurHandler}
                    block
                >
                    Add a card
                </Button>
            )}
            
            <style jsx>{`
                .inputContainer {
                    margin-bottom: 10px;
                }
            `}</style>
        </div>
    );
};

export default AddCard;