const output1 = document.getElementById("js--output1")
const output2 = document.getElementById("js--output2")
const output3 = document.getElementById("js--output3")

const input = document.getElementById("js--input")

console.log(output1)
console.log(output2)
console.log(output3)

console.log(input)

input.oninput = function(event){
    output1.innerText = event.target.value
    output2.innerText = event.target.value
    output3.innerText = event.target.value
}