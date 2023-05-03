const screen1 = document.getElementById("screen1")
const screen2 = document.getElementById("screen2")

// enter number
function punch(y){
    screen1.value = screen1.value+y;
}

// add dot
function punchdot(y){
    let isDot = screen1.value.includes(y)
    if(!isDot){
        screen1.value = screen1.value+y;
    }
}
// delete
function del(){
    let input = screen1.value;
    let newinput = input.substring(0,input.length-1)
    screen1.value=newinput;
}

// clear
function clear(){
    screen1.value= ""
}