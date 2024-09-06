import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

const URI = process.env.NODE_ENV === 'production' ? process.env.DB_URL : 'mongodb://127.0.0.1:27017/nodedb';

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`database connected successfully...`);
    }
    catch (err) {
        console.log(`db error: ${err.message}`);
    }
}


