const organizeInstructors = function(instructors) {
  let obj = {};
  for (let instructor of instructors) {
    if (!(instructor.course in obj)) {
      obj[instructor.course] = [instructor.name];
    } else {
      obj[instructor.course].push(instructor.name);
    }
  }
  return obj;
};

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));