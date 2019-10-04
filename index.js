const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

require('./routes/baseRoute')(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("App is running on PORT" + PORT);
});