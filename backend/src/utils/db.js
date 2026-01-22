import a11a from 'mongoose';
const connectDB = async () => {
    try {
        console.log('Attempting to connect to MongoDB:', process['env']['MONGO_URI']);
        await a11a['connect'](process['env']['MONGO_URI']);
        console['log']('MongoDB connected successfully!');
    } catch (a) {
        console['error']('MongoDB connection failed:', a);
        process['exit'](0x1);
    }
};
export default connectDB;