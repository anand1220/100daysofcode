const quoteText = document.querySelector(".quote-text");
const quoteBox = document.querySelector(".quote-box")

function getQuote() {
    const quotes = [
        "Any fool can write code that a computer can understand. Good programmers write code that humans can understand. ― Martin Fowler",
        "Programming is the art of telling another human being what one wants the computer to do. ― Donald Ervin Knuth",
        "Web development is difficult, only then it is fun to do. You just have to set your standards. If it were to be easy, would anyone do it? ― Olawale Daniel",
        "Programmers seem to be changing the world. It would be a relief, for them and for all of us, if they knew something about it.  – Ellen Ullman",
        "If debugging is the process of removing bugs, then programming must be the process of putting them in. – Sam Redwine"
    ];

    const colors = [
        "#ffadad",
        "#ffd6a5",
        "#fdffb6",
        "#caffbf",
        "#9bf6ff",
        "#a0c4ff",
        "#bdb2ff",
        "#ffc6ff"
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    const colorIndex = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomIndex];

    quoteText.style.opacity = 0;
    setTimeout(() => {
        quoteText.textContent = randomQuote;
        quoteText.style.opacity = 1;
    }, 200);
    quoteBox.style.backgroundColor = randomColor;
}