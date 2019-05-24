const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')
const viewsPath = path.join(__dirname, '../views/templates')
const partialsPath = path.join(__dirname, '../views/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Sergio León'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About Me',
        name: 'Sergio León'
    })
})

app.get('/about/*', (req, res) => {
  res.render('error', {
    title: 'Error',
    message: 'About article not found',
    name: 'Sergio León'
  })
});

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: 'This is some helpful text.',
        title: 'Help',
        name: 'Sergio León'
    })
})

app.get('/help/*', (req, res) => {
  res.render('error', {
    title: 'Error',
    message: 'Help article not found'
  })
});

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.get('/weather/*', (req, res) => {
  res.render('error', {
    title: 'Error',
    message: 'Weather article not found'
  })
});

app.get('*', (req, res) => {
  res.send("My 404 page");
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})
