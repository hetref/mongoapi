const express = require('express')
const mongoose = require('mongoose');
require('dotenv/config');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

// Import Routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// app.use('/posts', () => {
//     console.log('This is a middlewre running');
// })


// ROUTES
app.get('/', (req, res) => {
    res.send('We are on Home');
})

// Connect to DB
mongoose.connect(process.env.DB_CONNECTION_URL, () => { console.log("Connected DB") })

// Listen on any port
app.listen(process.env.PORT || 3000)