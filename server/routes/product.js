const express = require('express');
const router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json())

let Product = require('../models/products');

router.post('/product', async (req, res) => {
    try {
        let product = new Product(req.body)
        await product.save()
        res.status(201).send(product)
    }
    catch (err) {
        console.log(err);
        res.status(402).send('error')
    }
})

router.get('/product', async (req, res) => {
    try {
        let product = await Product.find();
        if (!product) {
            res.send('product not found')
        } else {
            res.send(product);
        }
    }
    catch (err) {
        console.log(err);
        res.send(err)
    }

})


router.get('/product/:id', async (req, res) => {
    try {
        let product = await Product.findById(req.params.id)
        if (!product) {
            res.send('restruarant not found')
        }
        else {
            res.send(product);
        }
    }
    catch (err) {
        console.log(err);
        res.send(err)
    }
})


router.patch('/product/:id', async (req, res) => {
    try {
        let product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (product) {
            res.send(product)
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


router.delete('/product/:id', async (req, res) => {
    try {
        let product = await Product.findByIdAndDelete(req.params.id, { new: true })
        if (!product) {
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