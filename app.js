const express = require('express');
const database = require('./config/connection');
const bodyParser = require('body-parser');
const books = require('./routers/books');

const app = express();
const port = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

database.sync({ force: true }).then(() => {
    console.info("database synced");
}).catch(err => {
    console.error("failed to sync database: " + err.message);
});

app.use("/api/books", books);

app.get("/", (req, res) => {
    res.json({
        message: "Welcome To Book REST API Server"
    });
});

app.listen(port, () => console.log(`Server up and running on port ${port}`));