"use strict";
const program = require("commander");
const { createFragement } = require("./utils/index");

program
    .version("1.0.2")
    .description("Create custom fragement")
    .option(
        "-a  --add <fragementname>",
        "create custom fragement",
        createFragement
    );

program.parse(process.argv);

console.log(" list: %j", program.createFragement);
