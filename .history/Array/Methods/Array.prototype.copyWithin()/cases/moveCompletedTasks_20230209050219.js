let scores = [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]

function updateScore(score) {
  scores.push(score)
  scores.sort((a, b) => b - a)
  scores.copyWithin(0, 0, 10)
  scores.length = 10
}

updateScore(110)
updateScore(95)
updateScore(85)

console.log(scores)
// [ 110, 95, 100, 90, 85, 80, 70, 60, 50, 40 ]
