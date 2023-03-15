const getScores = () => {
    return JSON.parse(localStorage.getItem('scores') || JSON.stringify([]));
}

const setScores = (scores) => {
    localStorage.setItem('scores', JSON.stringify(scores));
}

const displayMessage = (element, message) => {
    element.innerText = message;
    element.classList.remove('d-none');// show the error message

};

const clearMessage = (element) => {
    element.innerText = '';
    element.classList.add('d-none'); // hide the error message

};

const refreshPage = async (gameId) => {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`);
    const data = await response.json();
    return data.result;
};



export { getScores, setScores, displayMessage, clearMessage, refreshPage };