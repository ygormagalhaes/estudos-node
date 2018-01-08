var express = require('express');
var load = require('express-load');
var app = express();

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

app.listen(3000, () => {
  console.log('Iniciando Ntalk.');
});