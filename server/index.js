//bring your env variables to your main file in the server 
const keys = require("./keys");

//Expresss Application basic setup
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgresss Client Application basic setup

const { Pool } = require("pg");
const pgClient = new Pool({
    user: keys.pgUser,
    host: keys.pgHost,
    database: keys.pgDatabase,
    password: keys.pgPassword,
    port: keys.pgPort
});

//Basic table creation for PSQL with Express connection

pgClient.on("connect", (client)=> {
    client
    .query("CREATE TABLE IF NOT EXIST values (number INT)")
    .catch(err => console.log("PG error", err));
});

// Basic Express routes definitions
app.get("/", (req, res) =>{
    res.send("Hello, here is the get request");
});

//Endpoint to get all the values in the data
app.get("values/all", async (req, res) => {
    const values = await pgClient.query("SELECT * from values");
    res.send(values);
});

//Endpoint to post all the values in the data
app.post("/values", async(req, res) =>{
    if(!req.body.value) res.send({working: false});

    pgClient.query("INSERT INTO values(number) VALUES($1)", [req.body.value]);

    res.send({working: true});
});

// port listeners

app.listen(5000, (err) =>{
    console.log("Listening / Escuchando puerto 5000");
});

