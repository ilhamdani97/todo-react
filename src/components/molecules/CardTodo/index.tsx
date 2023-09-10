import React, { useState } from "react";
import Todo from "./styles";
import { Button, Input, RadioButton } from "../../atoms";
import IconDelete from '../../../assets/images/trash-bin.png';
import IconPencil from '../../../assets/images/pencil.png';

interface Props {
    active: boolean;
    title: string;
    isEdit: boolean;
    onSelect: ()=> void;
    onDelete: ()=> void;
    setEdit: (e: string) => void;
    onClickEdit: ()=> void;
    onActionEdit: ()=> void;
}

const CardTodo = ({
    active,
    title,
    onSelect,
    isEdit,
    onDelete,
    setEdit,
    onClickEdit,
    onActionEdit
}: Props) => {

    const [editValue, setEditValue] = useState<string>(title);

    return (
        <Todo.Card active={active}>
            <Todo.Content>
                <RadioButton isActive={active} onClick={onSelect}/>
                {isEdit ? (
                    <>
                        <Input 
                            variant={'small'}
                            placeholder={'Edit'}
                            value={editValue}
                            setValue={(e) => {
                                setEdit(e);
                                setEditValue(e);
                            } }
                        />
                        <Button disable={title === editValue} mode={'small'} title={'Edit'} variant={title === editValue ? 'disable' : 'primary'} onClick={onClickEdit}/>
                    </>
                    
                ) : (
                    <Todo.Text active={active}>
                        {title}
                    </Todo.Text>
                )}
                
            </Todo.Content>
            <Todo.Action>
                <Todo.ImageDelete src={IconPencil} onClick={onActionEdit}/>
                <Todo.ImageDelete src={IconDelete} onClick={onDelete}/>
            </Todo.Action>
           
        </Todo.Card>
    )
}

export default CardTodo;