const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const data = require('./data');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.render('index', data);
})

app.get('/:id', function(req, res){

  let userData = data.users.find((el)=>{
    return el.id == req.params.id;
  });

  console.log(userData);

  res.render('profile', userData)
})

app.listen(3000, function(){
});
