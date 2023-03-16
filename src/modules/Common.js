

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
    const scores = data.result;
    const scoreList = document.getElementById('scoreList');
    scoreList.innerHTML = '';
    scores.sort((a, b) => b.score - a.score);
    scores.forEach((score) => {
        const newElement = document.createElement('li');
        newElement.innerText = `${score.user} : ${score.score}`;
        scoreList.appendChild(newElement);
    });
    var evenLis = document.querySelectorAll("#scoreList li:nth-child(even)");
    for (var i = 0; i < evenLis.length; i++) {
        evenLis[i].style.backgroundColor = "#f2f2f2";
    }
};



export { displayMessage, clearMessage, refreshPage };