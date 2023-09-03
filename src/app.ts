import express from "express";
import fs from 'fs'

const port = 3000;
const app = express();

//app.use(express.text())
app.use(express.urlencoded({ extended: true })); 

app.post('/', (req, res) => {
    console.log('received '+JSON.stringify(req.body));
    fs.writeFileSync(`data-${new Date().getTime()}.txt`, JSON.stringify(req.body));
    res.send();
});

app.listen(port, () => {
    return console.log(`listening on port ${port}`);
});