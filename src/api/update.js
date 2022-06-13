const superagent = require('superagent')

const updatePost = async (postId, updatedPost) => {
    const url = `http://localhost:3000/posts/${postId}`
    superagent.post(url)
    .send(updatedPost)
    .end((err, res) => { 
        if (err){
            console.log(err)
        }
    })   
}
   

module.exports = updatePost