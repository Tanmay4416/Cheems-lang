// Generated automatically by nearley, version 2.20.1
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }
var grammar = {
    Lexer: undefined,
    ParserRules: [
    {"name": "program", "symbols": ["statements"], "postprocess": id},
    {"name": "statements", "symbols": ["_", "statement", "_"], "postprocess": 
        data => [data[1]]
                },
    {"name": "statements", "symbols": ["_", "statement", "_", {"literal":"\r"}, {"literal":"\n"}, "statements"], "postprocess": 
        data => [data[1], ...data[5]]
                },
    {"name": "statement", "symbols": ["var_assignment"], "postprocess": id},
    {"name": "statement", "symbols": ["print_statement"], "postprocess": id},
    {"name": "statement", "symbols": ["while_loop"], "postprocess": id},
    {"name": "while_loop$string$1", "symbols": [{"literal":"j"}, {"literal":"a"}, {"literal":"b"}, {"literal":"-"}, {"literal":"t"}, {"literal":"a"}, {"literal":"k"}, {"literal":"-"}, {"literal":"v"}, {"literal":"r"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "while_loop", "symbols": ["while_loop$string$1", "_", {"literal":"("}, "_", "binary_expression", "_", {"literal":")"}, "_", {"literal":"["}, "_", {"literal":"\r"}, {"literal":"\n"}, "statements", {"literal":"\r"}, {"literal":"\n"}, "_", {"literal":"]"}], "postprocess": 
        data => {
            return {
                type: "while_loop",
                condition: data[4],
                body: data[12]
            }
        }
                },
    {"name": "print_statement$string$1", "symbols": [{"literal":"b"}, {"literal":"o"}, {"literal":"l"}, {"literal":"-"}, {"literal":"v"}, {"literal":"r"}, {"literal":"o"}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "print_statement", "symbols": ["print_statement$string$1", "_", {"literal":"("}, "_", "expression", "_", {"literal":")"}], "postprocess": 
        data => {
            return {
                type: "print_statement",
                expression: data[4]
            }
        }
                },
    {"name": "expression", "symbols": ["unary_expression"], "postprocess": id},
    {"name": "expression", "symbols": ["binary_expression"], "postprocess": id},
    {"name": "unary_expression", "symbols": ["number"], "postprocess": id},
    {"name": "unary_expression", "symbols": ["identifier"], "postprocess": id},
    {"name": "binary_expression", "symbols": ["unary_expression", "_", "operator", "_", "expression"], "postprocess": 
        data => {
            return {
                type: "binary_expression",
                left: data[0],
                operator: data[2],
                right: data[4]
            }
        }
                },
    {"name": "operator", "symbols": [{"literal":"+"}], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":"-"}], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":"*"}], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":"/"}], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":">"}], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":"<"}], "postprocess": id},
    {"name": "operator$string$1", "symbols": [{"literal":">"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "operator", "symbols": ["operator$string$1"], "postprocess": id},
    {"name": "operator$string$2", "symbols": [{"literal":"<"}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "operator", "symbols": ["operator$string$2"], "postprocess": id},
    {"name": "operator", "symbols": [{"literal":"="}], "postprocess": id},
    {"name": "var_assignment$string$1", "symbols": [{"literal":":"}, {"literal":"="}, {"literal":"="}], "postprocess": function joiner(d) {return d.join('');}},
    {"name": "var_assignment", "symbols": ["identifier", "_", "var_assignment$string$1", "_", "expression"], "postprocess": 
        data => {
            return {
                type: "var_assignment",
                varname: data[0],
                value: data[4]
            }
        }
                },
    {"name": "identifier$ebnf$1", "symbols": [/[a-z]/]},
    {"name": "identifier$ebnf$1", "symbols": ["identifier$ebnf$1", /[a-z]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "identifier", "symbols": ["identifier$ebnf$1"], "postprocess": 
        data => data[0].join("")
            },
    {"name": "number", "symbols": ["digits", {"literal":"."}, "digits"], "postprocess": 
        data => Number(data[0] + "." + data[2])
                },
    {"name": "number", "symbols": ["digits"], "postprocess": 
        data => Number(data[0])
                },
    {"name": "digits$ebnf$1", "symbols": [/[0-9]/]},
    {"name": "digits$ebnf$1", "symbols": ["digits$ebnf$1", /[0-9]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "digits", "symbols": ["digits$ebnf$1"], "postprocess": 
        data => data[0].join("")
            },
    {"name": "_$ebnf$1", "symbols": []},
    {"name": "_$ebnf$1", "symbols": ["_$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "_", "symbols": ["_$ebnf$1"]},
    {"name": "__$ebnf$1", "symbols": [/[ ]/]},
    {"name": "__$ebnf$1", "symbols": ["__$ebnf$1", /[ ]/], "postprocess": function arrpush(d) {return d[0].concat([d[1]]);}},
    {"name": "__", "symbols": ["__$ebnf$1"]}
]
  , ParserStart: "program"
}
if (typeof module !== 'undefined'&& typeof module.exports !== 'undefined') {
   module.exports = grammar;
} else {
   window.grammar = grammar;
}
})();
