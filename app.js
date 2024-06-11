const express = require('express');
const hbs = require('hbs');
require('dotenv').config();
//const path = require('path');
const app = express();
const port = process.env.PORT;

hbs.registerPartials( __dirname + '/views/partials', function (err){});
app.set('view engine', 'hbs');//cuando Handlebars Handlebars renderice 1 vista buscara en carpeta VIEWS
//hbs.registerPartials( __dirname + '/views/partials');
//hbs.registerPartials(__dirname, 'views/partials');
//hbs.registerPartials(path.join( __dirname + '/views/partials')); 
//hbs.registerPartials(path.join(__dirname, 'views', 'partials'));

//servir contenido estatico
app.use( express.static('public'));

app.get('/', function (req, res) {
  res.render('home', {
    nombre:'Fernando Herrera',
    titulo54: 'Curso de NODE'
  })
})

app.get('/generic', function (req, res) {
  res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', function (req, res) {
  res.sendFile(__dirname + '/public/elements.html')
})
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/public/index.html');
})

//app.listen(8080)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

