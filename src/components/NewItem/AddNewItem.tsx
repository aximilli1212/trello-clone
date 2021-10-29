import {useState} from 'react'
import {AddItemButton} from "../../styles/styles";

type AddNewItemProps ={
    onAdd(text: string): void
    toggleButtonText: string
    dark?: boolean
}

export const AddNewItem = (props: AddNewItemProps)=>{
    const [showForm, setShowForm] = useState(false)
    const {onAdd, toggleButtonText, dark} = props

    if(showForm){
        //We show items creation Form here.
    }

    return (
        <AddItemButton dark={dark} onClick={()=>setShowForm(true)}>
            {toggleButtonText}
        </AddItemButton>
    )

}
