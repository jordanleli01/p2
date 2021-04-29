function choiceToPrint(choice) {
    if(choice == 0) {
        return "rock" ;
    }
    else if (choice == 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function updateScores() {
    wheader.innerHTML = "wins:" + wins;
    lheader.innerHTML = "losses: " + losses;
    theader.innerHTML = "ties: " + ties;
}

function playRound(userChoice) {
    let compChoice = Math.floor(Math.random() * 3);

    if(compChoice ==((userChoice + 1) % 3)) {
        losses++;
        resultp.innerHTML = "you lose! The computer picked" + choiceToPrint(compChoice) + "which beats" + choiceToPrint(compChoice)+ "."
        updateScores();
    }
    else if(userChoice == ((compChoice + 1) % 3)) {
        wins++;
        resultp.innerHTML= "You win! You picked" + choiceToPrint(userChoice) + "which beats" + choiceToPrint(compChoice) + "."
        updateScores();
    }
    else {
        ties++;
        resultp.innerHTML = "its a tie!"
        updateScores();
    }
}


function buttonClicked() {
if(this.innerHTML == "rock") {
    playRound(0);
}
else if (this.innerHTML == "paper") {
    playRound(1);
}
else {
    playRound(2);
}
}

let wins = 0,
losses = 0,
ties= 0;

let wheader = document.getElementById("wins" ),
    lheader = document.getElementById("losses"),
    theader = document.getElementById("ties");

    let resultp = document.getElementById("results");

    let buttons= document.getElementsByClassName("button");

    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", buttonClicked, false);
    }