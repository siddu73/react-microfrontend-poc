const express = require("express");
const graphqlHTTP = require("express-graphql");
const logger = require("morgan");
const cors = require("cors");
const config = require("./config");

const app = express();

app.listen(3010);

//Database connection --
var mongoose = require("mongoose");

const userSchema = require("./graphql/index").userSchema;
app.use(logger("dev"));
app.use(
    "/graphql",
    cors(),
    graphqlHTTP({
        schema: userSchema,
        rootValue: global,
        graphiql: true
    })
);

mongoose
    .connect(config.DATABASE)
    .then(() => {
        console.log(`Succesfully Connected to theMongodb Database..`);
    })
    .catch(() => {
        console.log(`Error Connecting to the Mongodb Database...`);
    });

module.exports = app;
