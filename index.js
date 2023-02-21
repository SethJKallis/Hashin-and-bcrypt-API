const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();

app.set("port", parseInt(process.env.PORT) || 3600);
app.use(express.json());

let corsOption = {
    origin: '*'
};

app.use(cors(corsOption));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', (req,res) => {
    res.json({
        Message: "Welcome to the application!"
    });
});


app.listen(app.get("port"), () => {
    console.log(`Server is listening on Port ${app.get("port")}`)
});