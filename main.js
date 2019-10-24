$(document).ready(function(){
    var mysteryWord = commonWords.filter(function(word){
        return word.length >= 3
})

var commonWords = commonWords[Mathfloor(Math.random() * commonWords.length)]
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
        'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
        't', 'u', 'v', 'w', 'x', 'y', 'z']

var answerArray = []
for (var i = 0; i < commonWords.length; i++) {
    answerArray[i] = "_"
}

var remaining = commonWords.length

while (remaining > 0) {
    alert(answerArray.join(" "))


    var guess = prompt("Guess a letter to play Hangman")
    if (guess === null) {
        break;
    } else if (guess.length !==1) {
        console.log("Please enter a single letter.")
    } else {
        for (var a = o; a < commonWords.length; a ++) {
            if (word[a] === guess) {
                answerArray[a] = guess
                remaining--
            }
        }
    }
}

alert(answerArray.join(" "))
console.log("Good job! The answer was " + commonWord)

