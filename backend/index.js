const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
// const cors = require('cors');
const rootRouter = require('./routes/index');

const app = express();

// app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://sterling-seths.vercel.app');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST, PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
  });
const port = (process.env.PORT);

app.use("/api/v1", rootRouter);
app.listen(port, () => {
    console.log(`Server listed on port ${port}`);
})