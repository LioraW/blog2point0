import React, { useEffect, useState } from 'react'

import Paper from '@mui/material/Paper'
import { blueGrey, lightBlue } from '@mui/material/colors'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import SaveIcon from '@mui/icons-material/Save';
import Button from '@mui/material/Button';

import updatePost from '../api/update'
import deletePost from '../api/deletePost';
import '../App.css';




const superagent = require('superagent')
const buttonStyle = {
    marginRight: '10px',
    textDecoration: 'none',
    margiLeft: 'auto'
}

const Posts = () => {

    const [posts, setPosts] = useState([])
    const [newTitle, setNewTitle] = useState("")
    const [newText, setNewText] = useState("")

    //for updating
    const handleTitleChange = event => { setNewTitle(event.target.value) }
    const handleTextChange = event => { setNewText(event.target.value) }

    const editPost = async (id) => {
        await  updatePost(id, { title: newTitle, text: newText }) 
    }


    //get the posts
    const getPosts = async () => {

        const url = 'http://localhost:3000/posts'
        const resp = await superagent.get(url)

        setPosts(resp.body)

    }

    useEffect(() => {
        getPosts()
    }, [posts])

    return (
        <div className='App-body'>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div className="instructions">
                                Enter update title and text here, then click a post to update it with the new information:
                            </div>
                            <input type="text" value={newTitle} title="Enter a new title" placeholder="New Title" onChange={handleTitleChange} />
                            <input type="text" value={newText} title="Enter new text" placeholder="New Text" onChange={handleTextChange} />

                        </td>
                    </tr>
                    {
                        posts.map(post => {
                            return (
                                <tr key={post._id}>
                                    <td>
                                        <Paper elevation={10} style={{ background: lightBlue, padding: 20 }}>
                                            <div className='post-title'>
                                                {post.title}
                                            </div>
                                            <div className='post-text'>
                                                {post.text}
                                            </div>
                                            
                                            <div className='edit-options'>
                                                <IconButton aria-label="update"
                                                    onClick={ async () => { editPost(post._id) } }>
                                                    <EditIcon />
                                                </IconButton>
                                                <IconButton aria-label="delete"
                                                    onClick={ async () => { await deletePost(post._id) }}>
                                                    <DeleteIcon />
                                                </IconButton>

                                            </div>
                                        </Paper>
                                    </td>
                                </tr>
                            )
                        }
                        )
                    }
                </tbody>
            </table>
        </div>


    )

}


export default Posts