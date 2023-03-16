

const CreateGame = async (name) => {
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
    const gameId = data.result.split(' ')[3]; // Extract the gameId from the response
    return gameId;
}
export default CreateGame;