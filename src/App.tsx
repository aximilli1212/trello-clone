import React from 'react';
import {AddNewItem} from "./components/NewItem/AddNewItem";
import {AppContainer} from "./styles/styles";
import {Column} from "./components/Column/Column";
import {Card} from "./components/Card/Card";
import {useAppState} from "./state/AppStateContext";
import { addList } from "./state/actions"

    export const App = () =>{
    const {lists, dispatch} = useAppState();
    return (
        <AppContainer>
            {lists.map((list)=>(
                <Column id={list.id} key={list.id} text={list.text} />
            ))}
        <AddNewItem
            toggleButtonText="+ Add another list"
            onAdd={text => dispatch(addList(text))}
            />
        </AppContainer>
        );
}
