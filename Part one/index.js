let count=-1

let countEl = document.getElementById("count-el")
console.log(countEl)
function increment(){
    count += 1
    countEl.innerText = count
}
increment()
function save(){
    let saveEl = document.getElementById("save-el")
    let val = count + "-" 
    saveEl.textContent += val
    countEl.textContent = 0
    count = 0
}
save()



