import React, { useState } from 'react';
import { Input, Typography, Button } from 'antd';
import { PlusOutlined,CloseOutlined } from '@ant-design/icons';


const AddCard = ({addNewCardData,listId}) => {
    const { TextArea } = Input;
    const [open, setOpen] = useState(false);
    const [cardTitle, setCardTitle] = useState(null);

    const addAndCloseBtnHandler = () => {
        setOpen(!open);
    }

    const onCardDataSubmit = () => {
        if(cardTitle){
            addNewCardData(listId,cardTitle);
        }
        setCardTitle(null);
        setOpen(!open);
    }

    return(
        <div>
            {open ? (
                <div>
                    <div className="inputContainer">
                        <TextArea 
                            defaultValue={cardTitle} 
                            onChange={(event) => {setCardTitle(event.target.value)}}
                        />
                    </div>
                    <Button type="primary" onClick={onCardDataSubmit}>Add card</Button>
                    <Button type="text" icon={<CloseOutlined />} onClick={addAndCloseBtnHandler}/>
                </div>
            ) : (
                <Button 
                    type="text" 
                    icon={<PlusOutlined />} 
                    style={{color: '#5e6c84', textAlign: 'left'}} 
                    onClick={addAndCloseBtnHandler}
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