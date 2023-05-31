const express = require('express')
const path = require('path')
const app = express()
const parser = require('body-parser')
const port = 8080

app.use(parser.json())
app.use(express.static(path.join(__dirname, "public")))

app.get('/hello/:name', (req, res) => {
    res.send('Hello World!' + req.params.name)
})

app.put("/yo", (req, res) => {
    let incoming_payload = req.body
    res.status(200).json(incoming_payload)

    // res.send("Yo is a put route")
})

app.get('/about', (req, res) => {
    // res.send('Hey Guys')
    res.sendFile(path.join(__dirname, 'index.html'))
    // res.status(500)
    // res.json({ "harry": 34 })
})

app.get("/report", (req, res) => {
    const path_file = path.resolve("report", "Dedicated_Report.xlsx")

    res.download(path_file, (err) => {
        if (err) {
            res.status(500).send(`Unexception error occured - ${err.message}`)
        }
    })
})

const server = app.listen(port, '0.0.0.0', () => {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`Example app listening at http://${host}:${port}`);
});