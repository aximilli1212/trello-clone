import {useState} from "react";
import {NewItemFormContainer, NewItemButton, NewItemInput} from "../../styles/styles";
import {useFocus} from "../../utils/useFocus";


type NewItemFromProps = {
 onAdd(text: string): void
}

export const NewItemForm = ({onAdd}: NewItemFromProps)=>{
    const [text, setText] = useState("");
    const inputRef = useFocus();
    return (<NewItemFormContainer>
        <NewItemInput
            ref={inputRef}
            value={text}
            onChange={e=>setText(e.target.value)}
        />
        <NewItemButton>
            Create Item
        </NewItemButton>
    </NewItemFormContainer>)
}
