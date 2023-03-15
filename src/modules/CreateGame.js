let gameId;

async function CreateGame(name) {
    const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name
        })
    });
    const data = await response.json();
    gameId = data.result;
    return gameId;
}
export default CreateGame;