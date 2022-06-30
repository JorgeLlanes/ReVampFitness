const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

//* Connection to MongoDB and Testing it
mongoose.connect(
  "mongodb+srv://Jnrlns:741203Jll1998@cluster0.uh93i.mongodb.net/Database",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const submitSchema = mongoose.Schema({
  fName: String,
  lName: String,
  email: String,
  phone: Number,
  interest1: String,
  interest2: String,
  interest3: String,
  reference: String,
  questions: String,
  promo: String,
});

const submitForm = mongoose.model("submitForm", submitSchema);

app.post("/contact", (req, res) => {
  let newSubmitForm = new submitForm({
    fName: req.body.fName,
    lName: req.body.lName,
    email: req.body.email,
    phone: req.body.phone,
    interest1: req.body.interest1,
    interest2: req.body.interest2,
    interest3: req.body.interest3,
    reference: req.body.reference,
    questions: req.body.questions,
    promo: req.body.promo,
  });
  newSubmitForm.save();
  res.redirect("/contact.html");
});

// var db = mongoose.connection;

// db.on("error", () => console.log("Error in connecting to Database"));
// db.once("open", () => console.log("Connected to Database"));

// app.post("/contact", (req, res) => {
//   var fName = req.body.fName;
//   var lName = req.body.lName;
//   var email = req.body.email;
//   var phone = req.body.phone;
//   var interest1 = req.body.interest1;
//   var interest2 = req.body.interest2;
//   var interest3 = req.body.interest3;
//   var reference = req.body.reference;
//   var questions = req.body.questions;
//   var promo = req.body.promo;

//   var data = {
//     fName: fName,
//     lName: lName,
//     email: email,
//     phone: phone,
//     interest1: interest1,
//     interest2: interest2,
//     interest3: interest3,
//     reference: reference,
//     questions: questions,
//     promo: promo,
//   };

//   db.collection("user").insertOne(data, (err, collection) => {
//     if (err) {
//       throw err;
//     }
//     console.log("Recored inserted Successfully");
//   });
//   return res.redirect("contact.html");
// });

app.get("/", (req, res) => {
  res.set({
    "Allow-access-Allow-Origin": "*",
  });
  return res.redirect("public/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
