require("dotenv").config();
const express = require("express");
const countModel = require("./models/count");

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
    try {
        await productModel.increment("Incrementation");
        const counting = await countModel.count();
        res.status(200).json(counting);
        res.send('Counting incrementations :' + counting);
    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
});

app.listen(process.env.NODE_DOCKER_PORT, () => {
    console.log(`application running on port ${process.env.NODE_DOCKER_PORT}`)
});