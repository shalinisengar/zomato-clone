const express = require('express');
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json())

let Restruarant = require('../models/returant');

router.post('/restro', async (req, res) => {
    try {
        let restraurant = new Restruarant(req.body)
        await restraurant.save()
        res.status(201).send(restraurant)

    }
    catch (err) {
        console.log(err);
        res.status(402).send('error')
    }
})

router.get('/restro', async (req, res) => {
    try {
        let restruarant = await Restruarant.find();
        if (!restruarant) {
            res.send('restruarant not found')
        } else {
            res.send(restruarant);
        }
    }
    catch (err) {
        console.log(err);
        res.send(err)
    }

})


router.get('/restro/:id', async (req, res) => {
    try {
        let restraurant = await Restruarant.findById(req.params.id)
        if (!restraurant) {
            res.send('restruarant not found')
        }
        else {
            res.send(restraurant);
        }
    }
    catch (err) {
        console.log(err);
        res.send(err)
    }

})




router.patch('/restro/:id', async (req, res) => {
    try {
        let restraurant = await Restruarant.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (restraurant) {
            res.send(restraurant)
        }
        else {
            res.send('restruarent not found')
        }

    }
    catch (err) {
        console.log('errr', err);
        res.send(err)
    }

})




router.delete('/restro/:id', async (req, res) => {

    try {
        let restraurant = await Restruarant.findByIdAndDelete(req.params.id, { new: true })
        if (!restraurant) {
            res.send('not founddd')
        }
        else {
            res.send('deleteddd')
        }

    }
    catch (err) {
        console.log('errr', err);
        res.send(err)
    }



})


module.exports = router