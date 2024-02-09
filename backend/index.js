const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const rootRouter = require('./routes/index');

const app = express();

app.use(cors());
app.use(express.json());
const port = (process.env.PORT);

app.use("/api/v1", rootRouter);
app.listen(port, () => {
    console.log(`Server listed on port ${port}`);
})