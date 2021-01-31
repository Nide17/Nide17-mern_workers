const express = require("express");
const router = express.Router();

//Worker Model : use capital letters since it's a model
const Worker = require('../../models/Worker');

    //Prevent cors errors
//     router.use((req, res, next) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//     next();
// });

// GET ENDPOINT //
// @route GET api/workers
// @route Get All Workers
// @route Public

//we use router. instead of app. and / because we are already in this dir
router.get('/', (req, res) => {

    //find Method to find in the workers in db
    Worker.find()

        //sort workers by date desc(-1)
        .sort({ date: -1 })

        //return a promise
        .then(workers => res.json(workers));
});



// POST ENDPOINT //
// @route POST api/workers
// @route Create a Worker
// @route Public

//we use router. instead of app. and / because we are already in this dir
router.post('/', (req, res) => {

    //Construct an object from the Model(require('../../models/Worker') to send data to the database
    const newWorker = new Worker({

        //Get the name from request
        name: req.body.name
    });

    //Save to the DB using json
    newWorker.save().then(worker => res.json(worker));

});


// DELETE ENDPOINT //
// @route DELETE api/workers
// @route delete a Worker
// @route Public

//:id placeholder, findId=we get it from the parameter in url
router.delete('/:id', (req, res) => {

    //Find the worker to delete by id first
    Worker.findById(req.params.id)

        //returns promise 
        .then(worker => worker.remove().then(() => res.json({ success: true })))
        // if id not exist or if error
        .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;