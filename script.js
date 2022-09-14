const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 15);

const formEl = document.getElementById('form');
const inputEl = document.getElementById('input');
const scoreEl = document.getElementById('score');



document.getElementById('qustion').innerText = `What is ${num1} multiplay by ${num2}?`
const anwser = num1 * num2;




let scorss = JSON.parse(localStorage.getItem('score'));
if (!scorss) {
    scorss = 0;
}
scoreEl.innerText = `Score : ${scorss}`;
formEl.addEventListener("submit", (event) => {
    // event.preventDefault();
    const userAns = +inputEl.value;

    if (userAns === anwser) {
        scorss++;
        updateStorage();
    } else {
        scorss--;
        updateStorage();
    }

});

function updateStorage() {
    localStorage.setItem('score', JSON.stringify(scorss));
}
