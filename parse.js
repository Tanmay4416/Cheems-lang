const nearley = require("nearley");
const grammar = require("./cheemslang.js");

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

try {

    parser.feed("bol-vro ( 45.7+5*2 )");
    console.log("Parse succeeded" , parser.results);

} catch (error) {
     
    console.log(`Parse failed: ${error.message}`);

}

