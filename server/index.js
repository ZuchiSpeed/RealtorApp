const express = require('express')
const mongoose = require('mongoose')

//routes
const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/authRoute');

const dotenv = require('dotenv');
dotenv.config();

mongoose.connect(process.env.MONGO).then(() => {
    console.log('connected to MongoDB')
}).catch((err) => {
    console.log(err);
});

const app = express();

//middleware
app.use(express.json());

app.use('/api/user', userRouter);
app.use('/api/auth', authRouter);


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})