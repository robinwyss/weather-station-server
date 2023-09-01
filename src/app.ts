import express from "express";
import fs from 'fs'

const port = 3000;
const app = express();

app.use(express.text())

app.post('/', (req, res) => {
    fs.writeFileSync('data.txt', req.body);
    res.send();
});

app.listen(port, () => {
    return console.log(`listening on port ${port}`);
});