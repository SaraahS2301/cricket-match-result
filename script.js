// Mock data for previous matches
const data = {
    India: { Australia: 10, England: 15, Pakistan: 20 },
    Australia: { India: 5, England: 12, Pakistan: 8 },
    England: { India: 7, Australia: 14, Pakistan: 10 },
    Pakistan: { India: 4, Australia: 10, England: 15 }
};

// Function to predict winner
function predict() {
    const teamA = document.getElementById("teamA").value;
    const teamB = document.getElementById("teamB").value;

    const teamA_wins = data[teamA][teamB];
    const teamB_wins = data[teamB][teamA];

    let winner;
    if (teamA_wins > teamB_wins) {
        winner = teamA;
    } else if (teamB_wins > teamA_wins) {
        winner = teamB;
    } else {
        winner = "Draw";
    }

    document.getElementById("result").innerText = `Predicted Winner: ${winner}`;
}