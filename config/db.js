const mongoose = require('mongoose');
const config = require('config');
const db = process.env.MONGODB_URI || "mongodb+srv://Twism5229:IPe58sqy7oPT5QLx@cluster0.2ykkv.mongodb.net/test?retryWrites=true&w=majority"

const connectDB = async () => {
    try {
        await mongoose.connect(db, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify: false
            

        });

        console.log('MongoDB Connected...');
    } catch(err) {
        console.error(err.message);
        // exit process with failure
        process.exit(1);

    }
};

module.exports = connectDB; 