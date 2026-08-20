let num1 = document.getElementById("num1-el")
let num2 = document.getElementById("num2-el")
let n1 = 7
let n2 = 2
let addR = n1+n2
let subR = n1-n2
let mulR = n1*n2
let divR = n1/n2
num1.innerText = n1
num2.innerText = n2 
function add(){
    let sum = document.getElementById("sum-el")
    sum.innerText=addR
}
function sub(){
    let dif = document.getElementById("sum-el")
    dif.innerText = subR
}
function mul(){
    let prd = document.getElementById("sum-el")
    prd.innerText = mulR
}
function div(){
    let quo = document.getElementById("sum-el")
    quo.innerText = divR
}
