import React from 'react';
import {AddNewItem} from "./components/NewItem/AddNewItem";
import {AppContainer} from "./styles/styles";
import {Column} from "./components/Column/Column";
import {Card} from "./components/Card/Card";

export const App = () =>{
    return (
        <AppContainer>
        <Column text="To Do">
            <Card text="Generate app scaffold" />
        </Column>
        <Column text="In Progress">
            <Card text="Learn Typescript" />
        </Column>
        <Column text="Done">
            <Card text="Begin to use static typing" />
        </Column>
        <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
        </AppContainer>
        );
}
