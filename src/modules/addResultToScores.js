
import { getScores, setScores } from './Common.js';

const createNewResult = (name, score) => {
    return {
        name: name,
        score: score,
    };
}

const addResultToScores = ({ name, score }) => {
    const scores = getScores();
    const newResult = createNewResult(name, score);
    scores.push(newResult);
    setScores(scores);
}

export default addResultToScores;
