const tasks = [
  { name: 'Task 1', status: 'completed' },
  { name: 'Task 2', status: 'active' },
  { name: 'Task 3', status: 'completed' },
  { name: 'Task 4', status: 'active' },
  { name: 'Task 5', status: 'completed' },
]

let firstCompletedTask = tasks.findIndex(task => task.status === 'completed')

while (firstCompletedTask !== -1) {
  let lastActiveTask = tasks.findLastIndex(task => task.status === 'active')
  tasks.copyWithin(
    lastActiveTask + 1,
    firstCompletedTask,
    firstCompletedTask + 1
  )
  tasks.splice(firstCompletedTask, 1)
  firstCompletedTask = tasks.findIndex(task => task.status === 'completed')
}

console.log(tasks)
// [
//   { name: 'Task 2', status: 'active' },
//   { name: 'Task 4', status: 'active' },
//   { name: 'Task 1', status: 'completed' },
//   { name: 'Task 3', status: 'completed' },
//   { name: 'Task 5', status: 'completed' },
// ]
