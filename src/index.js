import './index.css';
import addResultToScores from './modules/addResultToScores.js';
import { clearMessage, displayMessage, refreshPage } from './modules/Common.js';
import ShowScore from './modules/ShowScore.js';

const refreshBtn = document.getElementById('refreshBtn');
const submitBtn = document.getElementById('submitBtn');

const nameError = document.getElementById('nameError');
const scoreSuccess = document.getElementById('scoreSuccess');
const scoreError = document.getElementById('scoreError');
const name = document.getElementById('name');
const score = document.getElementById('score');
const scoreForm = document.getElementById('scoreForm');

const validateName = () => {
    if (!name.value) {
        displayMessage(nameError, 'Please enter a name.');
        return Promise.reject('Please enter a name.');
    } else {
        clearMessage(nameError);
        return Promise.resolve();
    }
};

const validateScore = () => {
    if (!score.value) {
        displayMessage(scoreError, 'Please enter a score.');
        return Promise.reject('Please enter a score.');
    } else if (isNaN(score.value)) {
        displayMessage(scoreError, 'Please enter a number for score.');
        return Promise.reject('Please enter a number for score.');
    } else {
        clearMessage(scoreError);
        return Promise.resolve();
    }
};

submitBtn.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        await validateName();
        await validateScore();
        addResultToScores({ name: name.value, score: score.value });
        displayMessage(scoreSuccess, 'Score added successfully');
        scoreForm.reset();
    } catch (error) {
        console.error(error);
    }
});

ShowScore();
refreshBtn.addEventListener('click', refreshPage);
