
function showProposal() {
    document.getElementById("welcome").classList.add("hidden");
    document.getElementById("proposal").classList.remove("hidden");
}

function sayYes() {
    document.getElementById("proposal").classList.add("hidden");
    document.getElementById("success").classList.remove("hidden");

    for (let i = 0; i < 30; i++) {
        createHeart();
    }
}

function moveButton() {
    const button = document.getElementById("noButton");

    const maxX = window.innerWidth - button.offsetWidth - 20;
    const maxY = window.innerHeight - button.offsetHeight - 20;

    const randomX = Math.max(10, Math.random() * maxX);
    const randomY = Math.max(10, Math.random() * maxY);

    button.style.position = "fixed";
    button.style.left = randomX + "px";
    button.style.top = randomY + "px";
}

function createHeart() {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random() * 25) + "px";
    heart.style.animationDuration = (3 + Math.random() * 4) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 7000);
}

setInterval(createHeart, 500);
