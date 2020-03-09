let app = new Vue({
    el: "#app",
    data: {
      words: [
        ["apple", "Sometimes red, sometimes delicious"],
        ["washington", "rushmore's left edge"],
        ["pumpkin", "Halloween's favorite fruit"],
        ["football", "Play with your hands or feet, depending on your location"]
      ],
      correctGuessMessage: "You got it! Nice work.",
      wrongGuessMessage: "Sorry, that's not correct. Please try again.",
      feedBackMessage: "",
      playerName: "",
      guessWord: "",
      actualWord: "",
      hint: "",
      gameOn: false,
      guessSubmitted: false,
      correctGuess: false
    },
    methods: {
        playGame: function () { //ready player one
            this.gameOn = true;
            this.guessSubmitted = false;
            this.correctGuess = false;
            this.feedBackMessage = "";
            this.guessWord = "";
            this.actualWord = "";
            this.hint = "";
        },
        submitPlayerGuess: function () { //ready player one
            this.guessSubmitted = true;
            this.correctGuess = this.guessWord === this.actualWord;
            this.feedBackMessage = this.correctGuess ? this.correctGuessMessage : this.wrongGuessMessage;
        }
    },
    computed: {
        shuffledWord: function(s) {
            const len = this.words.length;
            let newWord = this.words[Math.floor(Math.random() * len)];
            this.actualWord = newWord[0];
            this.hint = newWord[1];
            //shuffle
            let chars = this.actualWord.split("");
            for(var i = chars.length - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                var tmp = chars[i];
                chars[i] = chars[j];
                chars[j] = tmp;
            }
            return chars.join("");
        }
    }
  });