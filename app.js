// import functions and grab DOM elements
import { isYes } from './utils.js';

const button = document.getElementById('launch-button');
const resultsDiv = document.getElementById('results');

// initialize state

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    // - Announce that there is a quiz
    // - How? `alert()`
    alert('welcome to the quiz!');
    // - Check to see if the user wants to take it
    // - How? `confirm()`
    const wantsToTakeTheQuiz = confirm('Do you really want to take the quiz?');

    // read ! as unless or not
    if (!wantsToTakeTheQuiz) {
        alert('no problem! enjoy the site anyhow');
        return;
    }

    // - Get the user's name
    // - How? `prompt()`
    const name = prompt('What is your name?');

    let score = 0;
    // - Ask three questions
    // - How?  `prompt()`
    const firstAnswer = prompt('does the banjo have 5 strings?');
    const secondAnswer = prompt('is the banjo frequently used in traditional jazz?');
    const thirdAnswer = prompt('is the electric banjo very popular?');

    if (isYes(firstAnswer)) score++;
    if (isYes(secondAnswer)) score++;
    if (!isYes(thirdAnswer)) score++;

    const resultsString = `Okay ${name} you got ${score} right out of three.`;

    // - Display the results
    // - How? `textContent = 'whatever'`
    resultsDiv.textContent = resultsString;
});