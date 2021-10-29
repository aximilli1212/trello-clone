import React from 'react'
import {AddNewItem} from "../NewItem/AddNewItem";
import { ColumnContainer, ColumnTitle } from "../../styles/styles";

type ColumnProps = {
    text: string
}

export const Column: React.FC<ColumnProps> = ({text, children})=>{
    return <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        {children}
        <AddNewItem
          toggleButtonText="+ Add another task"
          onAdd={console.log}
          dark
        />
    </ColumnContainer>
}
