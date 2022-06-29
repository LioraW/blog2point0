import { useState } from "react"
import IconButton from '@mui/material/IconButton';

import AddIcon from '@mui/icons-material/Add';
import createPost from '../api/createPost';
import '../App.css';


const NewPost = () => {
    const [newTitle, setNewTitle] = useState("")
    const [newText, setNewText] = useState("")

    const handleTitleChange = event => { setNewTitle(event.target.value) }
    const handleTextChange = event => { setNewText(event.target.value) }

    return (
        <div>
                <input type="text" value={newTitle} title="Enter the title for the new post" placeholder="New Title" onChange={handleTitleChange} />
                <input type="text"  value={newText} title="Enter the text for the new post" placeholder="New Text" onChange={handleTextChange} />
            
            <IconButton aria-label="Add"
                onClick={async () => { await createPost({ title: newTitle, text: newText }) }}>
                <AddIcon fontSize="medium"/>
            </IconButton>

        </div>


    )

}

export default NewPost