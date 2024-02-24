let express  = require('express')
let router = express.Router();
router.use(express.urlencoded({ extended: true }));
router.use(express.json())

let Rating = require('../models/Rating')

router.post('/rating',async(req,res)=>{
    try {
        let rating = new Rating(req.body)
        await rating.save()
        res.status(201).send(rating)

    }
    catch(err){
        console.log(err);
    }
})

router.get('/rating',async(req,res)=>{
    try{
        let rating = Rating.find()
        
    }
    catch{

    }
})