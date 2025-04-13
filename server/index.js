const {
    client,
    createTables
} = require("./db");

const express = require("express");
const { JsonWebTokenError } = require("jsonwebtoken");
const app = express();
app.use(express.json());

const path = require("path");
const { start } = require("repl");

app.get("/", (req, res) =>
    res.sendFile(path.join(__dirname, "../client/dist/index.html"))
);
app.use(
    "/assets",
    express.static(path.join(__dirname, "../client/dist/assets"))
);

const init = async () => {
    const port = process.env.PORT || 3000;
    await client.connect();
    console.log("connected to little vintage database");

    await createTables();
    console.log("tables created");
};
init();