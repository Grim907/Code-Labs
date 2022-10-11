class logger{}
let random;
let max = 8
function findRandom() {
  random = Math.floor(Math.random() * 1000)
  console.log(random)
}
findRandom()

var colors = ["red","blue","green","yellow"];
var randomColor = colors[Math.floor(Math.random()*colors.length)];
console.log(randomColor)

let maximum: number = "..........".length;

for(let i = [].length;i <= (max * max);i++){
    console.log(i);
}
