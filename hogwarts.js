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
mitch.awardPoints(3);

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
  return null;
}
  // Adding Students
    gryffindor.addStudent(abby)
    gryffindor.addStudent(mitch)

House.prototype.getOrAddStudent = function(name) {
  if(this.getStudent(name)){
    return this.getStudent(name);
  } else {
    var newStudent = new Student(name);
    this.addStudent(newStudent);
    return this.getStudent(name); // need return statement here
  }
}
House.prototype.awardPointsTo = function(name,points) {
  if(this.getStudent(name)){
    this.getStudent(name).awardPoints(points)
  } else {
    this.getOrAddStudent(name);
    this.awardPointsTo(name,points);
    return this.getStudent(name);
  }
}
House.prototype.getTotalPoints = function(){
  var tally = 0;
  for(var i = 0; i < this.students.length; i++){
    tally += this.students[i].points;
  }
  return tally;
}
// Create school constructor

  // Augment prototype
