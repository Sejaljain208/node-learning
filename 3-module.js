// lecture 3 : file 3, 4 and 5 are in lecture 3...it is one concept . and 6 file as alternating ways to export module 

// CommonJs - every file is a module (by default)
// Modules - Encapsulated Code(only share minimum)

const names = require("./4-names")
console.log(names);

const sayHi = require("./5-utils")
sayHi('sasan')
sayHi(names.john)
sayHi(names.peter)

const data = require("./6-alternate-flavour")
console.log(data);

require('./7-SUMfunction')


