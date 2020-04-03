Vue.component("game-choices", {
    props: {
        // `name` has an expected data type of String, with no default set
        name: String,
    },
    template: "#game-choices",
});
let app = new Vue({
    el: "#app",
    data: {
        choices:  [
            {
                name :"rock"
            },
             {
                name: "paper"
            }, 
            { 
                name: "scissors"
            }
        ],
        playerName: "",
        playerChoice: "",
        computerChoice: "",
        gameOn: false,
        choiceSubmitted: false,
        gameResult: null,
        playerScore: 0,
        computerScore: 0,
        gameRound: 0,
        gameHistory: []
    },
    methods: {
        playGame: function () { //ready player one
            this.gameOn = true;
            this.choiceSubmitted = false;
            this.feedBackMessage = "";
        },
        submitPlayerChoice: function (name) {
            let choices = this.choices;
            function computerSelection () {
                // The computer makes a random selection among the choices
                let random = Math.floor(Math.random() * 3);
                let choice = choices[random];
                return choice;
            }
            this.guessSubmitted = true;
            const computerSelect= computerSelection();
            this.playerChoice = name;
            this.computerChoice = computerSelect.name;
            this.choiceSubmitted = true;
            this.gameRound++;
        },
        playAgain: function () {
            this.playerChoice = "";
            this.computerChoice = "";
            this.choiceSubmitted = false;
            this.gameResult = null;
        },
        resetScores: function () {
            this.choiceSubmitted = false;
            this.playerChoice = "";
            this.computerChoice = "";
            this.gameHistory = [];
            this.gameResult = null;
            this.playerScore = 0;
            this.computerScore = 0;
            this.gameRound = 0;
        }
    },
    computed: {
        getResult: function () {
            //Get the result of the play
            if(this.playerChoice === "rock" && this.computerChoice === "paper") {
                this.gameResult = { result : "win", message : "You lose :-( Paper beats Rock!" };
            } else if(this.playerChoice === "rock" && this.computerChoice === "scissors" ) {
                this.gameResult = { result : "win", message : "You win! Rock beats Scissors!" };
            } else if(this.playerChoice === "paper" && this.computerChoice === "rock" ) {
                this.gameResult = { result : "win", message : "You win! Paper beats Rock!" };
            } else if(this.playerChoice === "paper" && this.computerChoice === "scissors" ) {
                this.gameResult = { result : "lose", message : "You lose :-( Scissors beat Paper!" };
            } else if(this.playerChoice === "scissors" && this.computerChoice === "rock" ) {
                this.gameResult = { result : "lose", message : "You lose :-( Rock beats Scissors!" };
            } else if(this.playerChoice === "scissors" && this.computerChoice === "paper" ) {
                this.gameResult = { result : "win", message : "You win! Scissors beat Paper!" };
            } else {
                this.gameRound > 0 && (this.gameResult = { result: "tie", message: "It\'s a tie, no one wins"});
            }
            
            //update scores
            if(this.gameRound > 0) {
                if(this.gameResult.result === "win") {
                    this.playerScore++;
                    this.gameHistory.push({
                        stats: "Player won round " + this.gameRound
                    });
                } else if(this.gameResult.result === "lose"){
                    this.computerScore++;
                    this.gameHistory.push({
                        stats: `Computer won round ${this.gameRound}`
                    });
                } else { //it's a draw
                    this.gameHistory.push({
                        stats: `Round ${this.gameRound} was a tie` 
                    });
                }   
            }
            //only keep 5 results
            if(this.gameHistory.length > 5) this.gameHistory.shift();
        }
    }
  });