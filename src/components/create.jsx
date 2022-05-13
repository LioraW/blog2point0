import React, { useState } from 'react'

const superagent = require('superagent')

const Post = () => {
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
        setTitle(res.body[4].title)
        setText(res.body[4].text)
    } ); 

console.log(title)
console.log(text)
    return (
        <>
        <div>
            Title: {title}
        </div>
        <div>
            Text: {text}
        </div>
        </>
    )
}

const Create = () => {
    return (
    <>
            <div className='App-content-words'>
                <Post/>
            </div>
    
    </>
    )
}

export default Create