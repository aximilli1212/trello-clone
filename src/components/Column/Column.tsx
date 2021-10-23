import React from 'react'
import {ColumnContainer, ColumnTitle} from "../../styles/styles";

type ColumnProps = {
    text: string
}

export const Column = ({text}: ColumnProps)=>{
    return <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
    </ColumnContainer>
}
