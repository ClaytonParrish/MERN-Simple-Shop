const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const morgan = require("morgan");
const mongoose = require("mongoose");

require('dotenv/config');

app.use(bodyParser.json());
app.use(morgan('tiny'));

const api = process.env.API_URL;

app.get(`${api}/products`, (req, res) => {
    const product = {
        id: 1,
        name: 'product1',
        image: 'image1'
    }
    res.send(product);
});

app.post(`${api}/products`, (req, res) => {
    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);
});

mongoose.connect(process.env.CONNECT_STRING, {
    useNewUrlParser: true

})
.then(()=>{
    console.log('Database connection is ready...');
})
.catch((err)=> {
    console.log(err);
})

app.listen(3000, () => {
    console.log('${api}/products');
});