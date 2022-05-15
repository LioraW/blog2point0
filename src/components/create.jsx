import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import { blueGrey } from '@mui/material/colors'
import Button from '@mui/material/Button';
import updatePost from './update'
import deletePost from './deletePost';


const superagent = require('superagent')
const buttonStyle = {
    marginRight: '10px',
    textDecoration: 'none',
    margiLeft: 'auto'
   }

const Post = () => {

    const [posts, setPosts] = useState([])
    
    const getPosts = async () => {
    
        const url = 'http://localhost:3000/posts'
        const resp = await superagent.get(url)

        setPosts(resp.body)

    }

    useEffect(() => {
        getPosts()  
        
    }, [ posts ])

    return (
        <div> 
        <table>
            <tbody>
                {
                    posts.map(post => {
                        return (
                            <tr key={post._id}>
                                <td>
                                <Paper style={{background:blueGrey[500], padding:20}}>
                                    <div>
                                        Title: {post.title}
                                    </div>
                                    <div>
                                        Text: {post.text}
                                    </div>
                                    <Button style={buttonStyle} variant='contained' color='secondary'
                                        onClick={ async () => { await updatePost(post._id, {title:"liora", text: "rox"})} }>
                                        Update Post
                                    </Button>
                                    <Button style={buttonStyle} variant='contained' color='secondary'
                                        onClick={ async () => { await deletePost(post._id)} }>
                                        Delete Post
                                    </Button>
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

const Create = () => {
    return (
    <>
            <div className='App-content-words'>
                <Post />             
            </div>
    
    </>
    )
}

export default Create