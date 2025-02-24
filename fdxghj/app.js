const express = require('express')
const indexRouter=require('./Router/index')
const app = express();
app.use(express.json())
app.use('/',indexRouter)
app.listen(3000, () => {
    console.log("server started on port 3000")
})