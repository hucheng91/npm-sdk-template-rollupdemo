
const execa = require('execa');
const mergetag = require("./mergetag");
async function start() {
    try {
        const haveMerge = await mergetag.start();
        console.log(" start npm publish...........................");
    } catch (error) {
        console.log(error)
    }

}
start();


