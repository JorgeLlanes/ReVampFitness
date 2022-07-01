var addButton = document.getElementById("addButton");

addButton.addEventListener("click", displayDetails);
var row = 1;

function displayDetails() {
  var muscle = document.getElementById("input").value;
  //   var day1 = document.getElementById("day1").value;
  var pin1 = document.getElementById("pin1").value;
  var pin2 = document.getElementById("pin2").value;

  if (!muscle || !pin1 || !pin2) {
    alert("Please select");
    return;
  }

  var table = document.getElementById("table");

  var newRow = table.insertRow(row);

  var cell1 = newRow.insertCell(0);
  var cell3 = newRow.insertCell(1);
  var cell4 = newRow.insertCell(2);

  cell1.innerHTML = muscle;
  cell3.innerHTML = pin1;
  cell4.innerHTML = pin2;

  row++;
}

addButton.addEventListener("click", function () {
  setTimeout(function () {
    const inputSec = document.querySelector("input");
    let pin1 = document.getElementById("pin1");
    let pin2 = document.getElementById("pin2");

    inputSec.value = "";
    pin1.value = "";
    pin2.value = "";
  }, 500);
});
