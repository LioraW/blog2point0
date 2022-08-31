import { useState } from "react"
import IconButton from '@mui/material/IconButton';

import AddIcon from '@mui/icons-material/Add';
import createPost from '../api/createPost';
import PostCard from './PostCards'
import '../App.css';


const NewPost = () => {
    // const [newTitle, setNewTitle] = useState("Enter the title for the new post")
    // const [newText, setNewText] = useState("Enter the text for the new post")

    // const handleTitleChange = event => { setNewTitle(event.target.value) }
    // const handleTextChange = event => { setNewText(event.target.value) }

    const [newPostId, setNewPostId] = useState(0);

    const makeNewPost = async ()  => {
        const resp = await createPost({ title: "Enter the title for the new post" , text: "Enter the text for the new post" })
        console.log(resp) 
    }

    return (
        <>
        <IconButton aria-label="Add"
            onClick={() => { makeNewPost() } }>
            <AddIcon fontSize="medium"/>
        </IconButton>

              
     {/* <PostCard editable={true}/> */}
              
        {/* <div>
            <input type="text" value={newTitle} title="Enter the title for the new post" placeholder="New Title" onChange={handleTitleChange} />
            <input type="text"  value={newText} title="Enter the text for the new post" placeholder="New Text" onChange={handleTextChange} />
             
        </div> */}

        </>
        


    )

}

export default NewPost