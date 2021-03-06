const express = require('express')
const cors = require('cors');
const { MongoClient } = require('mongodb');
const ObjectId = require('mongodb').ObjectId;
require('dotenv').config();
const app = express()

const port = process.env.PORT || 5000


// middleware
app.use(cors());
// Get data from client site
app.use(express.json());


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.v2bif.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log(uri)
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {

    try {
        // await client.connect();
        // console.log('database connected');
    }
    finally {
        // await client.close()
    }

}
run().catch(console.dir);


app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


