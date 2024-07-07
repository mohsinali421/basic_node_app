const express = require("express")
const app = express()
const swaggerJS = require("swagger-jsdoc")
const swaggerUI = require("swagger-ui-express")
const route = require("./routes/index")
const swaggerOptions = require("./swagger")

app.use("/", route)

const specs = swaggerJS(swaggerOptions)

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs))

app.listen(3000, () => {
    console.log("Server started at 3000....");
})