import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import { blueGrey } from '@mui/material/colors'

const superagent = require('superagent')


const Post = (props) => {
    const [title, setTitle] = useState(0)
    const [text, setText] = useState(0)

    const url = 'http://localhost:3000/posts'
    // const post = {
    //     title: "blog post",
    //     text: "new words"
    // }

    // superagent
    // .post(url)
    // .send(post)
    // .end((err, res) => {
    //     if (err) {
    //         console.log(err)
    //         return
    //     }
    // })


superagent 
.get(url) 
.end((err, res) => { 
if (err) { 
    console.error(err); 
    return 
} 
    console.log(res.body)
    setTitle(res.body[props.index].title)
    setText(res.body[props.index].text)
    } ); 

    return (
        <>
        <Paper style={{background:blueGrey[500], padding:20}}>
            <div>
            Title: {title}
        </div>
        <div>
            Text: {text}
        </div>
        </Paper>
        
        </>
    )
}

const Create = () => {
    return (
    <>
            <div className='App-content-words'>
                <Post index={0}/>
            </div>
    
    </>
    )
}

export default Create