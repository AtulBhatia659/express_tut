const express = require('express')
const app = express()
const port = 12345

app.listen(port, () => {
    console.log(`Server is listening to port ${port}`);
})

app.get("/", (req, res) => {
    res.status(200).send("Basic route is up and running")
})