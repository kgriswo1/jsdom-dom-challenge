let count = document.querySelector("#counter");

function autoIncrement() {
    return count.innerText = parseInt(count.innerText) + 1;
}
let timing = setInterval(autoIncrement, 1000);

let body = document.querySelector("body")
let minus = document.getElementById("-")
let plus = document.getElementById("+")
let heart = document.getElementById("<3")
let countLikes = {};
let pause = document.getElementById("pause")
let ulTag = document.querySelector("ul.likes");
let 


body.addEventListener("click", function(event){
    if(event.target.id === "-") {
        count.innerText = parseInt(count.innerText) - 1;
    } else if (event.target.id === "+") {
        count.innerText = parseInt(count.innerText) + 1;
    } else if (event.target.id === "<3") {

        if (countLikes[count.innerText]) {
            countLikes[count.innerText] = parseInt(countLikes[count.innerText]) + 1; 
            let theLI = document.getElementById(`${count.innerText}`);
            console.log(theLI)
            theLI.innerText = `Number: ${count.innerText}, Likes: ${countLikes[count.innerText]}`;
        } else {
            countLikes[count.innerText] = 1;
            ulTag.insertAdjacentHTML("beforeend", `<li id="${count.innerText}">Number: ${count.innerText}, Likes: ${countLikes[count.innerText]}</li>`);
        };
    } else if (event.target.id === "pause" && pause.innerText === "pause") {
        clearTimeout(timing);
        pause.innerText = "resume"
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        
    } else if (event.target.id === "pause" && pause.innerText === "resume") {
        timing = setInterval(autoIncrement, 1000);
        pause.innerText = "pause"
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
    };
}); 