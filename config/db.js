let mongoose = require('mongoose');

require('dotenv').config();

let dbURL = process.env.mongoURL;

const connectDB = async () => {
    try {
        await mongoose.connect(dbURL,
        { 
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true,
        })
        console.log('mongo connected...');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;
