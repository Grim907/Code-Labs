let colors = ['red', 'blue', 'green', 'black','white']
let color = ['Blue', 'Red', 'Black', 'Purple']
function ChangeBackgroundColor(){
    let randomNumber = Math.floor(Math.random() * 5)
    document.body.style.backgroundColor = colors[randomNumber]
}
function ChangeTextColor(){
    let randomNumber = math.floor(Math.random() * 4)
    document.getElementById('title').style.color= color[randomNumber]
}