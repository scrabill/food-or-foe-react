window.addEventListener('DOMContentLoaded', (event) => {
    let emoji = document.querySelector("emoji")
    let buttons = document.querySelectorAll("button")

    displayEmoji()

    console.log(buttons)

    buttons.forEach(button => {
        button.addEventListener('click', (event) => {
            makeAGuess(event)
        })
    });

});

const emojis = ["🍔","🍝","🧀","🍤","🌭","🚀","🦄","💾","💎","💡"]
let score = document.querySelector("#score")

function makeAGuess(event) {
    let guess = event.target.id
    let currentEmoji = emoji.innerHTML
    let foodEmojis = ["🍔","🍝","🧀","🍤","🌭"]
    let foeEmojis = ["🚀","🦄","💾","💎","💡"]

    if (guess == "food") {
        updateScore(foodEmojis.includes(currentEmoji))
    } else {
        updateScore(foeEmojis.includes(currentEmoji))
    }

}

function updateScore(result) {



    if (result == true) {
        score.innerHTML++
    } else {
        score.innerHTML--
    }

    displayEmoji()
}

function getRandomEmoji() {
    return (
        emojis[Math.floor(Math.random() * emojis.length)]
      )
}

function displayEmoji() {
    emoji.innerHTML = getRandomEmoji()
}
