async function SubmitScore(user, score, gameId) {
    const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: user,
            score: score
        })
    });
    const data = await response.json();
    return data.result;
}

export default SubmitScore;
