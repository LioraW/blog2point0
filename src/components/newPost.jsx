import { useState } from "react"
import Button from '@mui/material/Button';
import createPost from '../api/createPost'

const buttonStyle = {
    marginRight: '10px',
    textDecoration: 'none',
    margiLeft: 'auto',
    margin: '10px'
}

const NewPost = () => {
    const [newTitle, setNewTitle] = useState("")
    const [newText, setNewText] = useState("")

    const handleTitleChange = event => { setNewTitle(event.target.value) }
    const handleTextChange = event => { setNewText(event.target.value) }

    return (
        <div> 
        <input type="text" value={newTitle} title="Enter the title for the new post" placeholder="New Title" onChange={handleTitleChange}/>
        <input type="text" value={newText} title="Enter the text for the new post" placeholder="New Text" onChange={handleTextChange}/>
        <Button style={buttonStyle} variant='contained' color='secondary'
            onClick={ async () => { await createPost({title: newTitle, text: newText})} }>
            New Post
        </Button>

        </div>
   
        
    )
    
}

export default NewPost