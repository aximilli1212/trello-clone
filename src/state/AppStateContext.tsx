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
}
    ]
}

type Task = {
    id: string
    text: string
}


 type List = {
     id: string
     text: string
     tasks: Task[]
 }

 export type AppState = {
    lists: List[]
 }