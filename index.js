const express = require('express');
const bodyParser = require('body-parser');
const pdf = require('html-pdf');
const cors = require('cors');

const pdfTemplate = require('./template');

const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.post('/create-pdf', (req, res) => {
    pdf.create(pdfTemplate(req.body), {}).toFile('result.pdf', (err) => {
        if(err) {
            console.log(err)
            res.send(Promise.reject());
        }

        res.send(Promise.resolve());
    });
});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/result.pdf`)
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
}

app.listen(port, () => console.log(`Listening on port ${port}`));