const express = require('express');
 
// const bodyparser = require('body-parser')
const app = express();
// const axios = require('axios');
const mongoose = require('mongoose');
const cors = require('cors')
const dotenv = require('dotenv')


const dataRoute = require('./Routes/FetchingData');

const corsOptions = {
    origin:'*', 
   credentials:true,            
   optionSuccessStatus:200,
    methods: 'GET',
  };
  
  app.use(cors(corsOptions));





dotenv.config();


mongoose.set("strictQuery", false);
mongoose.connect(
    process.env.MONGO_URL
    ).then(()=>
    
    console.log("database connect successfully")).catch((err)=>{
        console.log(err);
    })
    


    
    
    app.use(express.json());
    
    
    






























    
    
app.use("/display", dataRoute);



app.listen(process.env.BASE_URL, ()=>{
    console.log("server is listening")
})


