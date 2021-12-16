import express from "express";
import path from "path";
import cors from "cors";
import peopleRouter from "./libs/people/index.js";
import starshipRouter from "./libs/starships/index.js";
import bodyParser from "body-parser";


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


app.listen(PORT);


