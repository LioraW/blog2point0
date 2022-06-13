const superagent = require('superagent')

const createPost = async (updatedPost) => {
    
const url = `http://localhost:3000/posts/`
superagent.post(url)
.send(updatedPost)
.end((err, res) => { 
    if (err){
        console.log(err)
    }
}) 
        
    
    
}
   

module.exports = createPost