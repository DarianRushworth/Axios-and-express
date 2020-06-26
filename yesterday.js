//taking off the server
const axios = require('axios')
 

async function getJSON(){
    try{
        const url = `http://localhost:4000/json`
        const response = await axios.get(url)
        
        
        const learned = response.data
        const whatLearned = learned['yesterday']
        console.log(whatLearned)
    } catch (error){
        console.log(error.message)
    }
}
getJSON()