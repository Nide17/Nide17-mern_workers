// Bring in Mongo
// const MongoClient = require('mongodb').MongoClient;
const mongoose = require('mongoose');
//initialize Mongo schema
const Schema = mongoose.Schema;

//create a schema object
const WorkerSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
});

//worker: the name of this model
// module.exports = Worker = mongoose.model('worker', WorkerSchema);
module.exports = mongoose.model('worker', WorkerSchema);