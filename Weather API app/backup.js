const express = require('express');
const app = express();
const ejs = require('ejs');
const ejsMate = require('ejs-mate');
const fetch = require('node-fetch');
app.use(express.urlencoded({ extendet: true}));

app.use(express.static(__dirname + '/'));

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'))



app.get('/', (req, res) => {
    res.render('index');
});

app.post('/', (req, res) => {
    const city = req.body.city;
    const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=%{city}&units=metric&appid=3f5c7f4669bdbc486c9ff65870f65aee`;
fetch(urlApi)
.then(res => res.json())
.then(data => console.log(data));
})


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})