let number = 0;

const add = document.getElementById("add")
const sub = document.getElementById("sub")
const reset = document.getElementById("reset")
const addTen = document.getElementById("addTen")
const subTen = document.getElementById("subTen")


add.addEventListener("click", function () {
    number++;
    document.getElementById("number").innerHTML = number;
})

sub.addEventListener("click", function () {
    number--;
    document.getElementById("number").innerHTML = number;
})

reset.addEventListener("click", function () {
    number = 0;
    document.getElementById("number").innerHTML = number;
})

addTen.addEventListener("click", function() {
    number = number + 10;
    document.getElementById("number").innerHTML = number;
})

subTen.addEventListener("click", function() {
    number = number - 10;
    document.getElementById("number").innerHTML = number;
})