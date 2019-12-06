const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'build')));

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let userDetails = [
  { userName: 'Raseen', password: 'test', firstName: 'Md', lastName: 'Raseen', country: 'India', gender: 'male' },
  { userName: 'Ashok', password: 'test', firstName: 'Md', lastName: 'Ashok', country: 'India', gender: 'male' },
  { userName: 'John', password: 'test', firstName: 'Md', lastName: 'John', country: 'Australia', gender: 'male' },
];

app.use('/*',function(req,res,next){
  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

app.post('/*',function(req,res,next){
  res.header('Access-Control-Allow-Origin' , '*' );
  next();
});

app.get('/', function (req, res) {
  res.send('Test');
});



app.get('/api/login', function (req, res) {
  const userName = (req.param('userName'));
  const password = (req.param('password'));
  let user = userDetails.find((user) => user.userName === userName);
  if(user){
    if(user.password === password){
      return res.send({user, message:'User Suceessfully Loggedin'});
    }
    else{
      return res.send({error:"User and password doesn't match"});
    }
  }
  else{
    return res.send({error:"User Doesn't Exist"});
  }
});

app.post('/api/signup', function(req, res) {
  console.log(req.body);
  userDetails.push(req.body);
  res.send({message:'User Saved Successfully'});
});

app.listen(process.env.PORT || 8080);
