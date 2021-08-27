const fs = require('fs');
const express = require('express');
const fortunes = require('./data/fortunes');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

app.get("/fortunes", (req, res) => {
    res.json(fortunes);
});

app.get("/fortunes/random", (req, res) => {
    res.json(fortunes[Math.floor(Math.random()*fortunes.length)]);
});

app.get("/fortunes/:id", (req, res) => {
    res.json(fortunes.find(f => f.id == req.params.id));
});

const writeFortunes = (json) => {
    fs.writeFile("./data/fortunes.json", JSON.stringify(json), err => console.log(err));
}

app.post("/fortunes", (req, res) => {
    const { message, lucky_number, spirit_animal } = req.body;
    const fortuneIds = fortunes.map((item) => item.id);
    const fortune = {
        id: (fortuneIds.length > 0 ? Math.max(...fortuneIds) : 0) + 1,
        message: message,
        lucky_number: lucky_number,
        spirit_animal: spirit_animal
    }
    const newFortunes = fortunes.concat(fortune);
    writeFortunes(newFortunes);
    res.json(newFortunes);
});

app.put("/fortunes/:id", (req, res) => {
    const { id } = req.params;
    const oldFortune = fortunes.find(f => f.id == id);

    ["message", "lucky_number", "spirit_animal"].forEach(key => {
        if (req.body[key]) oldFortune[key] = req.body[key];
    })

    writeFortunes(fortunes);
    res.json(fortunes);
});


app.delete("/fortunes/:id", (req, res) => {
    const { id } = req.params;

    const newFortunes = fortunes.filter(f => f.id != id);
    writeFortunes(newFortunes);
    res.json(newFortunes);
});

module.exports = app;