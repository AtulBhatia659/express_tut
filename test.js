const fs = require('fs')

let file_Content = fs.readFileSync("index.js", "utf-8")

eval(file_Content)