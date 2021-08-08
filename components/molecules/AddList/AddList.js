import React, { useState } from 'react';
import { Input, Button } from 'antd';
import { PlusOutlined,CloseOutlined } from '@ant-design/icons';


const AddList = ({addNewList}) => {
    const { TextArea } = Input;
    const [open, setOpen] = useState(false);
    const [listTitle, setlistTitle] = useState(null);

    const addAndCloseBtnHandler = () => {
        setOpen(!open);
    }

    const onCardDataSubmit = () => {
        if(listTitle){
            addNewList(listTitle);
        }
        setlistTitle(null);
        setOpen(!open);
    }

    return(
        <div className="newListContainer">
            {open ? (
                <div>
                    <div className="inputContainer">
                        <Input 
                            onChange={(event) => {setlistTitle(event.target.value)}}
                        />
                    </div>
                    <Button type="primary" onClick={onCardDataSubmit}>Add list</Button>
                    <Button type="text" icon={<CloseOutlined />} onClick={addAndCloseBtnHandler}/>
                </div>
            ) : (
                <Button 
                    type="text" 
                    icon={<PlusOutlined />} 
                    style={{ color:'#ffffff', backgroundColor: 'rgba(255, 255, 255, 0.2)', textAlign: 'left'}} 
                    onClick={addAndCloseBtnHandler}
                    block
                >
                    Add another list
                </Button>
            )}
            
            <style jsx>{`
                .inputContainer {
                    margin-bottom: 10px;
                }
                .newListContainer {
                    min-width: 272px;
                }
            `}</style>
        </div>
    );
};

export default AddList;