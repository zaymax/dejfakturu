const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
var pdf = require("pdf-creator-node");
var fs = require("fs");
const cors = require("cors");
var path = require("path");
var html = fs.readFileSync(
  path.join(__dirname, "./template/template.html"),
  "utf8"
);


require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;
const mongoString = process.env.DATABASE_URL //needed for mongo auth

const routes = require('./routes/routes');

mongoose.connect(mongoString);
const database = mongoose.connection


database.on('error', (error) => {
  console.log(error)
})

database.once('connected', () => {
  console.log('Database Connected');
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', routes);
// app.use(cors());


app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  });
});

// app.post("/create-pdf", (req, res) => {
//   var document = {
//     html: html,
//     data: {
//       invoiceNumber: req.body.invoiceNumber,
//       registrationNumber: req.body.registrationNumber,
//       issueDate: req.body.issueDate,
//       dueDate: req.body.dueDate,
//       variableSymbol: req.body.variableSymbol,
//       constantSymbol: req.body.constantSymbol,
//       accountNumber: req.body.accountNumber,

//       identifierNumberOfSupplier: req.body.identifierNumberOfSupplier,
//       nameOfSupplier: req.body.nameOfSupplier,
//       vatIdentifierNumberOfSupplier: req.body.vatIdentifierNumberOfSupplier,
//       streetOfSupplier: req.body.streetOfSupplier,
//       cityOfSupplier: req.body.cityOfSupplier,
//       zipCodeOfSupplier: req.body.zipCodeOfSupplier,

//       identifierNumberOfClient: req.body.identifierNumberOfClient,
//       nameOfClient: req.body.nameOfClient,
//       vatIdentifierNumberOfClient: req.body.vatIdentifierNumberOfClient,
//       streetOfClient: req.body.streetOfClient,
//       cityOfClient: req.body.cityOfClient,
//       zipCodeOfClient: req.body.zipCodeOfClient,

//       invoiceItems: req.body.invoiceItems,
//     },
//     path: "./output.pdf",
//     type: "",
//   };

//   var options = {
//     format: "A3",
//     orientation: "portrait",
//     border: "10mm",
//   };

//   pdf
//     .create(document, options)
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((error) => {
//       console.error(error);
//     });

//   res.send(Promise.resolve());
// });

// app.get("/fetch-pdf", (req, res) => {
//   res.sendFile(`${__dirname}/output.pdf`);
// });

// if (process.env.NODE_ENV === "production") {
//   app.use(express.static(`${__dirname}/client/build`));
// }

app.listen(port, () => console.log(`Listening on port ${port}`));
