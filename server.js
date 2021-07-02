const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

const app = express();
const routes = require('./routes');

app.use(bodyParser.json())
app.use(methodOverride('_method'));


app.use('/users', routes.users);
app.use('/posts', routes.movies)

const cors = require('cors');
const corsOptions = {
    origin: ['http://localhost:3000'],
    methods: "GET,POST,PUT,DELETE",
    credentials: true, 
    optionsSuccessStatus: 200 
  }
  app.use(cors(corsOptions))

app.listen(3001, (req,res) => {
    console.log("Listening");
})