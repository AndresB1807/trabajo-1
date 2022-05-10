const express = require('express')
const cors = require('cors')
const path = require('path')
const router = require("./src/routes/index")

const {json, urlencoded} = express;
const app = express();
const port = process.env.PORT || 8080;

app.use(json())
app.use(urlencoded({extended: false}))

const corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

app.use(router);

app.use('/', (req, res) => {
    res.send('Esta es la version 1.0')
})

app.listen(port, () => {
    console.log(`El servidor esta en el puerto ${port}`)
})