const express = require('express');
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json())

let Menu = require('../models/menu');

router.post('/menu', async (req, res) => {
    try {
        let menu = new Menu(req.body)
        await menu.save()
        res.status(201).send(menu)
    }
    catch (err) {
        console.log(err);
        res.status(402).send('error')
    }
})

router.get('/menu', async (req, res) => {
    try {
        let menu = await Menu.find();
        if (!menu) {
            res.send('not found')
        } else {
            res.send(menu);
        }
    }
    catch (err) {
        console.log(err);
        res.send(err)
    }

})


router.get('/menu/:id', async (req, res) => {
    try {
        let menu = await Menu.findById(req.params.id)
        if (!menu) {
            res.send('menu not found')
        }
        else {
            res.send(menu);
        }
    }
    catch (err) {
        console.log(err);
        res.send(err)
    }
})


router.patch('/menu/:id', async (req, res) => {
    try {
        let menu = await Menu.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (menu) {
            res.send(menu)
        }
        else {
            res.send('not found not updated')
        }

    }
    catch (err) {
        console.log('errr', err);
        res.send(err)
    }
})


router.delete('/menu/:id', async (req, res) => {
    try {
        let menu = await Menu.findByIdAndDelete(req.params.id, { new: true })
        if (!menu) {
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