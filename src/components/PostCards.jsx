import React, { useState } from 'react'

import Paper from '@mui/material/Paper'
import { lightBlue } from '@mui/material/colors'
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';


import updatePost from '../api/update'
import deletePost from '../api/deletePost';

const PostCard = ( {id, title, text, date, editable} ) => {
    const [newTitle, setNewTitle] = useState(title)
    const [newText, setNewText] = useState(text)
    const [beingEdited, setBeingEdited] = useState(false)

    const handleTitleChange = event => { setNewTitle(event.target.value) }
    const handleTextChange = event => { setNewText(event.target.value) }

    const saveUpdatedPost = async (id) => {
        await updatePost(id, { title: newTitle, text: newText })
    }

    return (
        <>
            <Paper elevation={10} style={{ background: lightBlue, padding: 20, width:'100vh'}} sx={{width: '100%'}} className='card'>
                <div id='date'>
                    {date}
                </div>
                {
                    beingEdited && editable?
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
                {
                    editable?
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
                    :
                    null
                }
                
            </Paper>
        </>

    )
}

export default PostCard