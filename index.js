const express = require('express');
const bodyParser = require('body-parser');
var pdf = require("pdf-creator-node");
var fs = require("fs");
const cors = require('cors');
var path = require("path");
var html = fs.readFileSync(path.join(__dirname, "./template/template.html"), "utf8");


const app = express();

const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.post('/create-pdf', (req, res) => {
    console.log(req.body.invoiceItems)
    var document = {
        html: html,
        data: {
          invoiceItems: req.body.invoiceItems,
        },
        path: "./output.pdf",
        type: "",
    }

    var options = {
        format: "A3",
        orientation: "portrait",
        border: "10mm",
    };

    pdf.create(document, options).then((res) => {
        console.log(res);
    })
    .catch((error) => {
        console.error(error);
    });

});

app.get('/fetch-pdf', (req, res) => {
    res.sendFile(`${__dirname}/output.pdf`)
})

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(`${__dirname}/client/build`));
}

app.listen(port, () => console.log(`Listening on port ${port}`));