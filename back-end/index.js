const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req,res) => {
    return res.json({'msg':'test'});
});

app.listen(3030, () => {
    console.log('Server Started');
});