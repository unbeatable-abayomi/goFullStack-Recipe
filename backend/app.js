// MONOGODB PASSWORD == ouQXHoCgq7dFuCAZ

// MONOGODB CONNECTION   
// mongodb+srv://abayomi:<password>@cluster0-wnkzn.mongodb.net/test?retryWrites=true&w=majority

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();


mongoose.connect('mongodb+srv://abayomi:ouQXHoCgq7dFuCAZ@cluster0-wnkzn.mongodb.net/test?retryWrites=true&w=majority')
.then(()=>{
    console.log('Successfully to monogDB Atals')
})
.catch((error)=>{
    console.log("unable to connect to MonogoDB")
    console.error(error)

})
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  app.use(bodyParser.json());
app.post('/api/recipes', (req, res , next)=>{
    console.log(req.body);
    res.status(201).json({
        massage : 'Recipe Created Sucessfully'
    });

});
app.use('/api/recipes', (req, res ,next)=>{
    const recipes = [
         {
            title: 'yam patoto',
            ingredients: 'asun',
            instructions: 'graet',
            difficulty: 12,
            time: 12,
            _id: 'aanannna'
          },
          {
            title: 'yam gees',
            ingredients: 'asun',
            instructions: 'graet',
            difficulty: 12,
            time: 2,
            _id: 'aanannna'
          },
    ];
    res.status(200).json(recipes);
})

module.exports = app;