import express from "express";
import path from "path";
import cors from "cors";
import peopleRouter from "./libs/people/index.js";
import starshipRouter from "./libs/starships/index.js";
import bodyParser from "body-parser";
import { MongoClient } from "mongodb";

const url = 'mongodb://localhost:27017/';
const mongoClient = new MongoClient(url);
const __dirname = path.resolve();
const PORT = process.env.PORT ?? 5000;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(peopleRouter);
app.use(starshipRouter);


app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './index.html'));
});


app.use(function(err, req, res, next) {
    res.status(500).send('Something broke!');
});


mongoClient.connect((err, client) => {
    if(err) {
        console.log(err)
    }
    const db = client.db('StarWarsDatabase');
    const collection = db.collection('people');
    collection.findOne().then(items => console.log(items))
    console.log('connected')

    app.listen(PORT);
})


