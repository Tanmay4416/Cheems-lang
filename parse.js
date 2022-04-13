const nearley = require("nearley");
const grammar = require("./cheemslang.js");

const parser = new nearley.Parser(nearley.Grammar.fromCompiled(grammar));

parser.feed("567");

console.log(parser.results);