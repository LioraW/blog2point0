
const superagent = require('superagent')


const getSpecificPost = async (id) => {
    
const url = `http://localhost:3000/posts/${id}`
const resp =  await superagent.get(url)
const specificPost = await resp.body

console.log(specificPost)
return specificPost
}

module.exports = getSpecificPost