let mongoose = require('mongoose')
let express = require('express')
let app = express()
let cors =require('cors')
app.use(cors())
let userRoutes = require('./routes/user')
let loginRoutes = require('./routes/login')
let restraurant = require('./routes/restruarant')
let productRoutes = require('./routes/product')
let menuRouter = require('./routes/menu')

mongoose.connect('mongodb://127.0.0.1:27017/zomato').
    then(() => {
        console.log('db');

    }).catch((err) => {
        console.log(err);

    })


app.use('/api', userRoutes,loginRoutes)
app.use('/api',restraurant)
app.use('/api',productRoutes,menuRouter)


//    localhost:4000/api/users

app.listen(4000, () => {
    console.log('server running on port 4000');

})
