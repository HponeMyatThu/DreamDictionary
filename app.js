const { log } = require('console');
const express = require('express');
const app = express();
const router =  require("./routes/start")
const port = 3000;
const bodyPaser = require('body-parser');

app.use(bodyPaser.urlencoded({extended: false}));

app.set("view engine", "ejs");

app.use(router);

app.use((req, res, next) => {
    res.send('Page Not Found'); 
  });
  

app.listen(port, 'localhost', () =>{
    console.log(`http://localhost:${port}`);
})