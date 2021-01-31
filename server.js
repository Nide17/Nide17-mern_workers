// Bring in all dependencies
const express = require('express');
// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
const path = require('path');

// for handling routes
const bodyParser = require('body-parser');


// Bring in workers from the api
const workers = require('./routes/api/workers');

// Initialize express into the app variable
const app = express();

// Bodyparser has the piece of middleware we need
app.use(bodyParser.json());


//DB Config
const db = require('./config/keys').mongoURI;

//connect to Mongo
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected ...'))
    .catch(err => console.log(err));

//     //Prevent cors
// app.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     next();
// });

//Use routes / All requests going to the api/workers goes the workers variable at the top workers.js file
app.use('/api/workers', workers)


//Edit for deployment || serve static assets if in production
if (process.env.NODE_ENV === 'production') {

    //Set a static folder for frontend build
    app.use(express.static('client/build'));

    //anything coming will be redirected here
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
    //Let's create a post build script in package.json
}

//port to run on: env when deployed and 5000 locally/heroku
const port = process.env.PORT || 5000;


//When server started listen the port
app.listen(port, () => console.log(`Server is running on port ${port}`));