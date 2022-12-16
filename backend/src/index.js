require("dotenv").config()
const express = require("express")
const bodyParser = require("body-parser")
const routes = require("./routes/index.js")
const app = express()
const cors = require("cors")

app.disable("x-powered-by")
app.use(express.static(__dirname + "/public"))
app.use(bodyParser.json())
app.use(cors())

app.use("/api", routes)

app.listen(3001, () => console.log(`Server is listening on port 3001`))
