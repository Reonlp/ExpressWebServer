const path = require('path');
const express = require('express');

const app = express();
const publicDirectoryPath = path.join(__dirname, '../public');

//HANDLEBARS TEMPLATE ENGINE
app.set('view engine', 'hbs');
app.use(express.static(publicDirectoryPath));

app.get('/', (req, res) => {
  res.render('index', {
    title: 'Weather App',
    name: 'Leon leon'
  });
});

app.get('/about', (req, res) => {
  res.render('about', {
    title: 'About Me',
    name: 'Andrew Mead'
  });
});


app.get('/help', (req, res) => {
  res.render('help', {
    helpText: 'This is some helpful text.',
    name: ''
  })
});

app.get('/weather', (req, res) => {
  res.send({
    forecast: 'It is snowing',
    location: 'Philadelphia'
  });
});

app.listen(3000, () => {
  console.log('Server is up on port 3000');
});
