import { getScores } from './Common.js';

const showScores = async () => {
  try {
    const scores = await getScores();
    const scoreList = document.getElementById('scoreList');
    scores.sort((a, b) => b.score - a.score);
    scores.forEach((score) => {
        const newElement = document.createElement('li');
        newElement.innerText = `${score.name} : ${score.score}`;
        scoreList.appendChild(newElement);
    });
  } catch (error) {
    console.error('Error fetching scores:', error);
  }
};

export default showScores;

