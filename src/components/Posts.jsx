import React, { useEffect, useState } from 'react'

import Paper from '@mui/material/Paper'
import { lightBlue } from '@mui/material/colors'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';


import updatePost from '../api/update'
import deletePost from '../api/deletePost';
import '../App.css';

const superagent = require('superagent')


const PostCard = ( {id, post_title, post_text} ) => {
    const [newTitle, setNewTitle] = useState("")
    const [newText, setNewText] = useState("")
    const [beingEdited, setBeingEdited] = useState(false)

    const handleTitleChange = event => { setNewTitle(event.target.value) }
    const handleTextChange = event => { setNewText(event.target.value) }

    const saveUpdatedPost = async (id) => {
        await updatePost(id, { title: newTitle, text: newText })
    }

    return (
        <>
            <Paper elevation={10} style={{ background: lightBlue, padding: 20, width:'100vh'}} sx={{width: '100%'}} className='card'>
                {
                    beingEdited ?
                        <div>
                            <div className='post-title'>
                                <input type="text" defaultValue={post_title} value={newTitle} title="Enter a new title" onChange={handleTitleChange} />
                            </div>
                            <div className='post-text'>
                                <input type="text" defaultValue={post_text} value={newText} title="Enter new text" onChange={handleTextChange} />
                            </div>
                        </div>
                        :
                        <div>
                            <div className='post-title'>
                                {post_title}
                            </div>
                            <div className='post-text'>
                                {post_text}
                            </div>
                        </div>

                }
                <div className='edit-options'>
                    {
                        beingEdited ?
                            <div>
                                <IconButton aria-label="save"
                                    onClick={async () => { saveUpdatedPost(id); setBeingEdited(false) }}>
                                    <SaveIcon />
                                </IconButton>
                            </div>
                            :
                            <div>
                                <IconButton aria-label="update"
                                    onClick={async () => { setBeingEdited(true) }}>
                                    <EditIcon />
                                </IconButton>
                            </div>

                    }
                    <IconButton aria-label="delete"
                        onClick={async () => { await deletePost(id) }}>
                        <DeleteIcon />
                    </IconButton>
                </div>
            </Paper>
        </>

    )
}

const Posts = () => {

    const [posts, setPosts] = useState([])

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
                                Here are a few thoughts of mine:
                            </div>
                        </td>
                    </tr>
                    {
                        posts.map(post => {
                            return (
                                <tr key={post._id}>
                                    <td>
                                        <PostCard id={post._id} post_title={post.title} post_text={post.text}/>
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