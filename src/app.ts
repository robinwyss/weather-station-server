import express from "express";
import { Request, Response } from 'express';
import fs from 'fs'

const port = 3000;
const app = express();

app.use(express.urlencoded({ extended: true }));

app.post('/', (req: Request<{}, {}, WeatherStationData>, res: Response) => {
    const wsData = req.body;
    fs.writeFileSync(`data-${new Date().getTime()}.txt`, JSON.stringify(wsData));
    res.send();
});

app.listen(port, () => {
    return console.log(`listening on port ${port}`);
});