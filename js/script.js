let teamAScore = parseInt(document.getElementById("teamAScore").innerHTML);
let teamBScore = parseInt(document.getElementById("teamBScore").innerHTML);
let teamAIncrement1 = document.getElementById("teamAIncrement1");
let teamAIncrement2 = document.getElementById("teamAIncrement2");
let teamAIncrement3 = document.getElementById("teamAIncrement3");
let teamBIncrement1 = document.getElementById("teamBIncrement1");
let teamBIncrement2 = document.getElementById("teamBIncrement2");
let teamBIncrement3 = document.getElementById("teamBIncrement3");

teamAIncrement1.addEventListener("click", function() {
    teamAScore++;
    document.getElementById("teamAScore").innerHTML = teamAScore;
})

teamAIncrement2.addEventListener("click", function() {
    teamAScore += 2;
    document.getElementById("teamAScore").innerHTML = teamAScore;
})

teamAIncrement3.addEventListener("click", function() {
    teamAScore += 3;
    document.getElementById("teamAScore").innerHTML = teamAScore;
})

teamBIncrement1.addEventListener("click", function() {
    teamBScore++;
    document.getElementById("teamBScore").innerHTML = teamBScore;
})

teamBIncrement2.addEventListener("click", function() {
    teamBScore += 2;
    document.getElementById("teamBScore").innerHTML = teamBScore;
})

teamBIncrement3.addEventListener("click", function() {
    teamBScore += 3;
    document.getElementById("teamBScore").innerHTML = teamBScore;
})

console.log(teamAScore);
console.log(teamBScore);
