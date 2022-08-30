import React from 'react'
import NewPost from '../components/newPost'
import Posts from '../components/Posts'

const EditBlog = () => {
    return (
        <>
            <NewPost/>
            <Posts editable={true}/>
        </>
    )
}

export default EditBlog