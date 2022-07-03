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

const newTask = {
  excer: String,
  setx: String,
  sety: String,
};

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

const tasks = mongoose.model("tasks", newTask);
const submitForm = mongoose.model("submitForm", submitSchema);

//* Create w/ MongoDB
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
  res.redirect("/contact1.html");
});

//* Create w/ MongoDB
app.post("/", (req, res) => {
  let taskOne = new tasks({
    excer: req.body.excer,
    setx: req.body.setx,
    sety: req.body.sety,
  });
  taskOne.save();
  // res.redirect("/classes.html");
});

//* READ w/ MongoDB Postman  (R.E.S.T API)
app.get("/listtask", (req, res) => {
  tasks.find(function (err, response) {
    if (err) {
      throw err;
    } else {
      res.send({ status: 200, message: response });
    }
  });
});

//* UPDATE w/ MongoDB Postman
app.put("/update", (req, res) => {
  const id = req.query.id;
  const newExcer = req.query.excer;
  tasks.findByIdAndUpdate(id, { excer: newExcer }, function (err, response) {
    if (err) {
      res.send(err);
    } else {
      res.send({ status: 200, tasks: response });
    }
  });
});

//! DELETE w/ MongoDB Postman
app.delete("/deleteTask", function (req, res) {
  const id = req.query.id;

  tasks.findByIdAndDelete(id, function (err, response) {
    if (err) {
      res.send(err);
    } else {
      res.send({ status: 200, task: response });
    }
  });
});

app.get("/", (req, res) => {
  res.set({
    "Allow-access-Allow-Origin": "*",
  });
  return res.redirect("public/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
