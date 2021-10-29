import {useState} from "react";
import {NewItemFormContainer, NewItemButton, NewItemInput} from "../../styles/styles";

type NewItemFromProps = {
 onAdd(text: string): void
}

export const NewItemForm = ({onAdd}: NewItemFromProps)=>{

    const [text, setText] = useState("");
    return (<NewItemFormContainer>
        <NewItemInput
         value={text}
         onChange={e=>setText(e.target.value)}
        />
        <NewItemButton>
            Create Item
        </NewItemButton>

    </NewItemFormContainer>)
}
