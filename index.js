//putting on server
const express = require('express')

const app = express()


app.get(
    "/json", 
    (request, response) => {
    const days = {
        "today" :"Servers, npm, axios",
        "yesterday" :"Git, callbacks"
    }
    response.send(days)
})


const port = 4000

app.listen(
    port,
    () =>{
        console.log(`Listening on: ${port}`)
    }
)