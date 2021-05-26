
const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const express = require('express')
const { response } = require('express');
const axios=require('axios')
const app = express()
const bodyParser = require('body-parser')


//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
     res.sendFile(path.resolve('dist/index.html'))
})

//show the server port
app.listen(8084, function () {
    console.log('Example app listening on port 8084!')
})
const id=process.env.API_KEY
app.get('/send_url', function (req, res) {
   url=req.query.text
   //fetching the api 
    axios.post(`https://api.meaningcloud.com/sentiment-2.1?key=${id}&lang=auto&txt=${url}`)
    .then((response)=> {
        //send the data back to client side as object
        res.send({ score: response.data.score_tag,agr: response.data.agreement, sub: response.data.subjectivity, conf:response.data.confidence, iro:response.data.irony })

    })
  })
