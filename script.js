const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 15);

const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');
const score = document.getElementById('score');
let scorss = 0;


document.getElementById('qustion').innerText = `What is ${num1} multiplay by ${num2}?`
const anwser = num1 * num2;




formEl.addEventListener("submit", (event) => {

    const userAns = +inputEl.value;

    if (userAns === anwser) {
        score++;
        console.log(scorss)
    } else {
        score--;
        console.log(scorss)
    }
    event.preventDefault();
})
