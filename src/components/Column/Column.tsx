import React from 'react'
import { ColumnContainer, ColumnTitle } from "../../styles/styles";

type ColumnProps = {
    text: string
}

export const Column: React.FC<ColumnProps> = ({text, children})=>{
    return <ColumnContainer>
        <ColumnTitle>{text}</ColumnTitle>
        {children}
    </ColumnContainer>
}
