const { MongoClient } = require('mongodb')

const MongoConnection = process.env.MONGO;

const client = new MongoClient(MongoConnection);
const db = client.db("yw").collection("peeps");

async function addAnswer(req, res) {
  // console.log(req.body)

  db.insertOne(req.body.data).then((e) => {
    console.log(e)
    res.send(e)
  })
}

module.exports = { addAnswer };
