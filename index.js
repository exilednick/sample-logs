const express = require('express')

const app = express()

app.get('/err', async(req, res) => {
    console.log("ERROR: this is sample error")
    res.json({
        err: "sample"
    })
})

app.get('/info', async(req, res) => {
    console.log("INFO: this is sample info")
    res.json({
        info: "sample"
    })
})

app.listen(5000, () => console.log("INFO: server started"))