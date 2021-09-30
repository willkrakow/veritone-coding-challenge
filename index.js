const express = require('express');
const mongoose = require('mongoose')

mongoose
    .connect('mongodb://localhost/veritone', { useNewUrlParser: true })
    .then(() => console.log('Connected to MongoDB'))
    .then(() => {
        const app = express();

        app.use(express.json());
        app.listen(5000, () => console.log('Listening on port 5000'));
    })
    .catch(err => console.error('Could not connect to MongoDB', err));
