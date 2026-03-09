// Remove the rollno property from a student object.
function deleteRollno(obj) {
  delete obj.rollno;
  return obj;
}

var student = {
  name: "David Rayy",
  sclass: "VI",
  rollno: 12
};

var lines = [];
lines.push("Before: " + JSON.stringify(student));

deleteRollno(student);

lines.push("After:  " + JSON.stringify(student));

document.getElementById("output").textContent = lines.join("\n");
