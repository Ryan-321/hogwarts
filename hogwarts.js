// STUDENT
  //Constructor
function Student(name) {
  this.name = name;
  this.points = 0;
}
//  Augment prototype
Student.prototype.awardPoints = function(pointsEarned){
  this.points += pointsEarned;
}
    // Adding Students
var abby = new Student("abby")
abby.awardPoints(8);
var mitch = new Student("mitch")
abby.awardPoints(3);

// HOUSE
  //Constructor
function House(name){
  this.name = name;
  this.students = new Array;
}
// Adding Houses
var gryffindor = new House("gryffindor");

  // Augment prototype
House.prototype.addStudent = function(name) {
  this.students.push(name);
}
House.prototype.getStudent = function(name) {
  for(var i = 0; i < this.students.length; i++){  // Should be able to use forEach
    if(this.students[i].name === name) {
      return this.students[i];
    }
  }
  return console.log("No Students Matched")
}

gryffindor.addStudent(abby)
gryffindor.addStudent(mitch)

// Create school constructor

  // Augment prototype
