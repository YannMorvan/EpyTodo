const express = require ("express") ;
const env = require ("../.env") ;
const app = express () ;
const port = process.env.PORT | 3000;

app.get("/", (req, res) => {
    res.send("Hello World !\n");
});

app.get("/name/:name", (req, res) => {
    res.send(`Hello ${req.params.name} !\n`);
});

app.get("/date", (req, res) => {
    let date = new Date();
    res.send(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}\n`);
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
