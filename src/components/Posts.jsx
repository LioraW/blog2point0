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


const PostCard = ( {id, title, text, date} ) => {
    const [newTitle, setNewTitle] = useState("")
    const [newText, setNewText] = useState("")
    const [beingEdited, setBeingEdited] = useState(false)

    const handleTitleChange = event => { setNewTitle(event.target.value) }
    const handleTextChange = event => { setNewText(event.target.value) }

    const saveUpdatedPost = async (id) => {
        await updatePost(id, { title: newTitle, text: newText })
    }

    const formatDate = (date) => {
        const dateNumbers = date.split('T')[0].split('-')
        const months = {
            '01': 'Jan',
            '02': 'Feb',
            '03': 'Mar',
            '04': 'Apr',
            '05': 'May',
            '06': 'Jun',
            '07': 'Jul',
            '08': 'Aug',
            '09': 'Sep',
            '10': 'Oct',
            '11': 'Nov',
            '12': 'Dec',
        }
        
        return months[dateNumbers[1]] + " " + dateNumbers[2] + ", " + dateNumbers[0]
    }

    return (
        <>
            <Paper elevation={10} style={{ background: lightBlue, padding: 20, width:'100vh'}} sx={{width: '100%'}} className='card'>
                <div id='date'>
                    {formatDate(date)}
                </div>
                {
                    beingEdited ?
                        <div>
                            <div className='post-title'>
                                <input type="text" defaultValue={title} value={newTitle} title="Enter a new title" onChange={handleTitleChange} />
                            </div>
                            <div className='post-text'>
                                <input type="text" defaultValue={text} value={newText} title="Enter new text" onChange={handleTextChange} />
                            </div>
                        </div>
                        :
                        <div>
                            <div className='post-title'>
                                {title}
                            </div>
                            <div className='post-text'>
                                {text}
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
                    {
                        posts.map(post => {
                            return (
                                <tr key={post._id}>
                                    <td>
                                        <PostCard id={post._id} title={post.title} text={post.text} date={post.date}/>
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