
/* javascript inputchange*/
const output1 = document.getElementById("js--output1")
const output2 = document.getElementById("js--output2")
const output3 = document.getElementById("js--output3")

const input = document.getElementById("js--input")

input.oninput = function(event){
    output1.innerText = event.target.value
    output2.innerText = event.target.value
    output3.innerText = event.target.value
}

/* javascript voor favorites*/
const hearts = document.getElementsByClassName("heart__logo");

for(let i = 0; i < hearts.length; i++){
    hearts[i].onclick = function(){
        for(let i = 0; i < hearts.length; i++){
            hearts[i].classList = "fa-regular fa-heart heart__logo"
        }
        hearts[i].classList = "fa-solid fa-heart heart__logo";
    }
}


/*darkmode javascript */

const checkbox = document.getElementById("darkmode");

checkbox.addEventListener('change',() => {
    document.querySelector('body').classList.toggle("dark")
});