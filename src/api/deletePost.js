const superagent = require('superagent')

const deletePost = async (postId) => {
    
const url = `http://localhost:3000/posts/${postId}`
await superagent.delete(url)
.end((err, res) => { 
    if (err){
        console.log(err)
    }
    console.log("deleted:" + res.body.title)
}) 
  
}
   

module.exports = deletePost