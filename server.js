const express = require('express');
let app = express();
app.set('view engine', 'pug');
app.set('views', './views');

app.use('/store', (req, res, next) => {
    console.log('Jestem pośrednikiem przy żądaniu do /store');
    next();
});

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/store', (req, res) => {
    res.send('To jest sklep');
});

app.get('/first-template', (req, res) => {
    res.render('first-template');
});

app.get('/dynamic-view', (req, res) => {
    res.render('dynamic', {
        name: "Moja dynamiczna strona",
        url: "http://www.google.com"
    });
});

app.get('/google-log', (req, res) => {
    res.render('google-login', {
        info: "Tutaj zalogujesz do go swojego Google",
        infobutton: "Kliknij",
        name: "Logowanko do google",
        url: "/google-form"
    });
});

app.get('/google-form', (req,res) => {
    res.render('google-form', {
        url: "/auth/google"
    });
});

app.get('/auth/google', (req, res) => {
    res.render('google');
});

app.listen(3000);
app.use((req, res, next) => {
    res.status(404).send('Wybacz, nie mogliśmy odnaleźć tego, czego żądasz!')
});