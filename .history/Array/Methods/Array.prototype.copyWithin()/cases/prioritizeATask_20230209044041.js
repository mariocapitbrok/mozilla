//Suppose you have an array of tasks, and you want to move a task to the front of the list to prioritize it. You can achieve this by using the copyWithin() method:

const tasks = ['Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5']
const taskToPrioritize = 2

tasks.copyWithin(0, taskToPrioritize, taskToPrioritize + 1)

console.log(tasks)
// ['Task 3', 'Task 1', 'Task 2', 'Task 4', 'Task 5']
