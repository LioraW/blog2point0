import React, { useEffect, useState } from 'react'
import Paper from '@mui/material/Paper'
import { blueGrey } from '@mui/material/colors'

const superagent = require('superagent')


const Post = ()=> {

    const [posts, setPosts] = useState([])
    
    const getPosts = async () => {
    
        const url = 'http://localhost:3000/posts'
        const resp = await superagent.get(url)

        setPosts(resp.body)

    }


    useEffect(() => {
        getPosts()  
        
    })
    // console.log(posts)

 
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
                                        Title: {post.title}
                                       
                                        Text: {post.text}
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
    ///workaround will be to save a global variable with the number of posts, then do a for loop
    return (
    <>
            <div className='App-content-words'>
                
                <Post />
                
            </div>
    
    </>
    )
}

export default Create