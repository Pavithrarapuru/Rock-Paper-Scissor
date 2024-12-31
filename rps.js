let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let scissor = document.querySelector("#scr")
let player = document.querySelector("#player")
let game = document.querySelector(".game")
let ref = document.querySelector("h2")
const images = ["rock_image.png", "paper.png", "scissor.png"]
let playerscore = 0;
let cscore = 0;
let bot = document.querySelector("#bot")
let pscore = document.querySelector(".pscore");
let pcscore = document.querySelector(".cscore");

rock.addEventListener("click", () => {
    game.style.visibility = "visible"
    player.src = "rock_image.png"
    let randomIndex = Math.floor(Math.random() * images.length);

    if (randomIndex === 0) {
        ref.innerHTML = "🤝draw";
    }
    else if (randomIndex === 2) {
        ref.innerHTML = "🎉you won🎊🥳";
        playerscore = playerscore + 1
        pscore.innerHTML = playerscore

    }
    else {
        ref.innerHTML = "😿 computer Wins";
        cscore = cscore + 1
        pcscore.innerHTML = cscore
    }
    bot.src = images[randomIndex];
})
paper.addEventListener("click", () => {
    game.style.visibility = "visible"
    player.src = "paper.png"
    let randomIndex = Math.floor(Math.random() * images.length);
    if (randomIndex === 1) {
        ref.innerHTML = "🤝 draw";
    }
    else if (randomIndex === 0) {
        ref.innerHTML = "🎉you won🎊🥳";
        playerscore = playerscore + 1
        pscore.innerHTML = playerscore
    }
    else {
        ref.innerHTML = "😿 computer Wins";
        cscore = cscore + 1
        pcscore.innerHTML = cscore
    }
    bot.src = images[randomIndex];
})
scissor.addEventListener("click", () => {
    game.style.visibility = "visible"
    player.src = "scissor.png"
    let randomIndex = Math.floor(Math.random() * images.length);
    if (randomIndex === 2) {
        ref.innerHTML = "🤝 draw";
    }
    else if (randomIndex === 1) {
        ref.innerHTML = "🎉 you won🎊🥳";
        playerscore = playerscore + 1
        pscore.innerHTML = playerscore
    }
    else {
        ref.innerHTML = "😿 computer Wins";
        cscore = cscore + 1
        pcscore.innerHTML = cscore
    }
    bot.src = images[randomIndex];
})







