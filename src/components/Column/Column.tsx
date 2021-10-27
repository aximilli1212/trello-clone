import React from 'react'
import {AddNewItem} from "../NewItem/AddNewItem";
import { ColumnContainer, ColumnTitle } from "../../styles/styles";
import { useAppState } from "../../state/AppStateContext";
import {Card} from "../Card/Card";
import { addTask } from "../../state/actions"


    type ColumnProps = {
    id: string
    text: string
}

export const Column = ({text, id}:ColumnProps)=>{
    const {getTasksByListId, dispatch} = useAppState()
    const tasks = getTasksByListId(id)

    return (<ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        {tasks.map(task=> (<Card text={task.text} key={task.id} id={task.id} />))}
        <AddNewItem
          toggleButtonText="+ Add another task"
          onAdd={ text =>dispatch(addTask(text, id))}
        dark
        />
    </ColumnContainer>)
}
