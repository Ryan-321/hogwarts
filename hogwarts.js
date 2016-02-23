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
  var newStudent = new Student(name);
  this.students.push(newStudent);
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
function School(name) {
  this.name = name;
  this.houses = new Array;
}
var hogwarts = new School("Hogwarts")
var longfellow = new School("Longfellow")
  // Augment prototype
School.prototype.addHouse = function(name) {
  var newSchool = new School(name);
  this.houses.push(newSchool);
}
School.prototype.addHouses = function(){
  for(var i = 0; i < arguments.length; i++) {  // arguments takes any numbers of arguments
    var newSchool = new House(arguments[i])
    this.houses.push(newSchool)
  }
}
hogwarts.addHouses("ravenclaw","happy","sad", "gryffindor")
longfellow.addHouses("slippery","dippery","dock")
School.prototype.getHouse = function(name) {
  for(var i = 0; i < this.houses.length; i++){  // Should be able to use forEach
    if(this.houses[i].name === name) {
      return this.houses[i];
    }
  }
  return null;
}
School.prototype.getLeadingHouses = function(){
  var array = new Array;
  for(var i = 0; i < this.houses.length; i++){
    var house = this.houses[i].name;
    house = this.getHouse(house)
    array.push(house.getTotalPoints());
  }
  return array;
}
