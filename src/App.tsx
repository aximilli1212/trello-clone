import React from 'react';
import {AddNewItem} from "./components/NewItem/AddNewItem";
import {AppContainer} from "./styles/styles";
import {Column} from "./components/Column/Column";
import {Card} from "./components/Card/Card";
import {useAppState} from "./state/AppStateContext";

export const App = () =>{
    const {lists} = useAppState();
    return (
        <AppContainer>
            {lists.map((list)=>(
                <Column id={list.id} text={list.text} />
            ))}
        <AddNewItem toggleButtonText="+ Add another list" onAdd={console.log} />
        </AppContainer>
        );
}
