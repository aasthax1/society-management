const mongoose = require('mongoose');
const dotenv = require('dotenv');
const colors = require('colors');
dotenv.config();


const connectDB = async()=>{
    // Database connection
const DB = 'mongodb+srv://aastha15das:Aastha4700@cluster0.xoyuyb9.mongodb.net/society';

    try{
       const conn =  await mongoose.connect(DB
       , {
            useNewUrlParser: true,
            useUnifiedTopology:true,
          
         
        });
        console.log(`MongoDB Connected : ${conn.connection.host}`.blue.bold.underline);
    }catch(err){
        console.log(`err : ${err.message}`.red.bold);
        process.exit(1);
    }
}
module.exports = connectDB;