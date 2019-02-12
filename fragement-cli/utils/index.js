const makeDir = require("make-dir");

const createFragement = name => {
    (async () => {
        const path = await makeDir(name);

        console.log(path);
        return path;
    })();
};
module.exports = { createFragement };
