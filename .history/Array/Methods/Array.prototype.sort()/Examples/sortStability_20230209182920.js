/*Since version 10 (or ECMAScript 2019), the specification dictates that Array.prototype.sort is stable.

For example, say you had a list of students alongside their grades. Note that the list of students is already pre-sorted by name in alphabetical order:*/

const students = [
  { name: 'Alex', grade: 15 },
  { name: 'Devlin', grade: 15 },
  { name: 'Eagle', grade: 13 },
  { name: 'Sam', grade: 14 },
]

//After sorting this array by grade in ascending order:
students.sort((firstItem, secondItem) => firstItem.grade - secondItem.grade)
console.log(students)

/*The students variable will then have the following value:
 [
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Alex", grade: 15 }, // original maintained for similar grade (stable sorting)
  { name: "Devlin", grade: 15 }, // original maintained for similar grade (stable sorting)
]; 
*/

//It's important to note that students that have the same grade (for example, Alex and Devlin), will remain in the same order as before calling the sort. This is what a stable sorting algorithm guarantees.

/*Before version 10 (or ECMAScript 2019), sort stability was not guaranteed, meaning that you could end up with the following:

[
  { name: "Eagle", grade: 13 },
  { name: "Sam", grade: 14 },
  { name: "Devlin", grade: 15 }, // original order not maintained
  { name: "Alex", grade: 15 }, // original order not maintained
];
*/
