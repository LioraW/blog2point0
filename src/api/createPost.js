const superagent = require('superagent')

const createPost = async (updatedPost) => {
    
const url = `http://localhost:3000/posts/`
const resp = superagent.post(url)
            .send(updatedPost)
            .end((err, res) => { 
                if (err){
                    console.log(err)
                }
            }) 

const id = await resp.body
console.log(id)
        
    
    
}
   

module.exports = createPost