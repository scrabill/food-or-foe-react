window.addEventListener('DOMContentLoaded', (event) => {
    let emoji = document.querySelector("emoji")
    window.setInterval(displayEmoji, 1500);

});

const emojis = ["🍔","🍝","🧀","🍤","🌭","🚀","🦄","💾","💎","💡"]

function getRandomEmoji() {
    return (
        emojis[Math.floor(Math.random() * emojis.length)]
      )
}

function displayEmoji() {
    emoji.innerHTML = getRandomEmoji()
}
