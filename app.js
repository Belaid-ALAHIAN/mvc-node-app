const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')

//setting a public folder
const public = express.static(path.join(__dirname,'public'));

//routers
const postRoute = require('./routers/post');
const addpostRoute = require('./routers/add-post');
const pnfRouter = require('./routers/pnf');


const app = express();

app.set('view engine','ejs');
app.set('views','views');

//using body-parser
app.use(bodyParser.urlencoded({extended:false}));


//use a public folder
app.use(public);

app.use(postRoute);
app.use(addpostRoute);
app.use(pnfRouter);
app.listen(3030);