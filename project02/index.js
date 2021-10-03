const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');

const DB = require('./DB'); // DB 관련
const mongoose = require('mongoose');

//////////////////////////////////////////////////////////////
// DB connect
mongoose.connect('mongodb://localhost:27017/Board')
    .then(()=>{console.log('DB connected')})
    .catch(err=>{console.log('DB ERROR : ', err);
  });

// other setting
app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }))
//////////////////////////////////////////////////////////////


// write
app.get('/write', (req, res)=>{
  console.log("\n---write---");
  res.render('write');
});

// save main
app.post('/', async(req, res) => {
  console.log("\n---save main---")
  console.log(req);
  const database = new DB(req.body)
  await database.save()
  res.render('main', {database : 'Express'})
});

// read main
app.get('/', async(req, res) => {
  console.log("\n---read main---");
  // find
  res.render('main', {database : 'Express'});
});


//////////////////////////////////////////////////////////////
// Server start
var server = app.listen(3000, function () {
  var port = server.address().port;
  console.log('Server is working : PORT - ',port);
});

//////////////////////////////////////////////////////////////