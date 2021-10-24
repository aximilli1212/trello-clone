import {createContext, useContext, FC, Dispatch} from "react";
import {useImmerReducer} from "use-immer";
import {Action} from './actions'

import {
    appStateReducer,
    AppState,
    List,
    Task
} from "./appStateReducer"



type AppStateContextProps = {
    lists: List[]
    getTasksByListId(id:string): Task[]
    dispatch: Dispatch<Action>
}

const AppStateContext = createContext<AppStateContextProps>({} as AppStateContextProps)


export const useAppState = ()=>{
    return useContext(AppStateContext);
}

export const AppStateProvider: FC = ({ children }) => {
    const [state, dispatch] = useImmerReducer(appStateReducer, appData)
    const { lists } = state


    const getTasksByListId = (id: string) => {
        return lists.find((list) => list.id === id)?.tasks || []
    }

    return (
        <AppStateContext.Provider value={{ lists, getTasksByListId, dispatch }}>
            {children}
        </AppStateContext.Provider>
    )
}

    const appData: AppState = {
    lists: [
        {
            id: '0',
            text: 'To Do',
            tasks: [
                {
                    id: 'c1', text: "Generate App Scaffold"
                },
            ]
        },

        {
            id: "1",
            text: "In Progress",
            tasks: [{ id: "c2", text: "Learn Typescript" }]
        },

        {
            id: "2",
            text: "Done",
            tasks: [
                {
                    id: "c3", text: "Begin to use static typing"
                }
                ]
        },
        {
            id: "3",
            text: "Done Dev",
            tasks: [
                {
                    id: "c3", text: "Begin to use static typing"
                }
                ]
        }
    ]
}

//
// type Task = {
//     id: string
//     text: string
// }
//
//
//  type List = {
//      id: string
//      text: string
//      tasks: Task[]
//  }
//
//  export type AppState = {
//     lists: List[]
//  }
