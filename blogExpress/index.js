const express = require('express')
const app = express()

const exphbs = require('express-handlebars');

const path = require('path')
const port = 3000


app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');


app.use(express.static(path.join(__dirname, "static")))
app.use('/', require(path.join(__dirname, "routes/blog.js")))

app.listen(port, () => {
    console.log(`Blog app listening at http://localhost:${port}`);
})


