
function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function(subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function( ...mark ) {
  if(this.marks === undefined) {
    this.marks = [];
  }
  this.marks.push( ...mark )
}

Student.prototype.addMark = function( ...mark ) {
  if(this.marks === undefined) {
    this.marks = [];
  }
  this.marks.push( ...mark )
}


Student.prototype.getAverage = function(marks) {
  let sum = 0;
  for (let i = 0; i < this.marks.length; i++) {
    sum += this.marks[i];
  }

  return sum / this.marks.length
}

Student.prototype.exclude = function(reason) {
  delete this.subjectName;
  delete this.marks;

  this.excluded = reason;
}