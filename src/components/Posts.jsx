import React, { useEffect, useState } from 'react'
import PostCard from './PostCards';
import formatDate from '../formatting/formatDate';
import '../App.css';

const superagent = require('superagent')

const Posts = ({editable}) => {

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
                            const formattedDate = formatDate(post.date)
                            return (
                                <tr key={post._id}>
                                    <td>
                                        <PostCard id={post._id} title={post.title} text={post.text} date={formattedDate} editable={editable}/>
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