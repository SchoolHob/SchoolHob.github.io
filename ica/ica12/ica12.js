const endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion"


const newQuote = document.querySelector("#js-new-quote");
newQuote.addEventListener('click', getQuote);

const newAnswer = document.querySelector("#js-tweet");
newAnswer.addEventListener('click', getAnswer);

const answerText = document.querySelector("#js-answer-text");

let currentJson;

getQuote();

async function getQuote() {
    answerText.textContent = "";


    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw Error(response.statusText);
        }

        currentJson = await response.json();

        displayQuote(currentJson.question);
    } catch (err) {
        console.log(err);
        alert("Failed to fetch from API");
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector("#js-quote-text");
    quoteText.textContent = quote;
}

function getAnswer() {
    displayAnswer(currentJson.answer);
}

function displayAnswer(answer) {
    answerText.textContent = answer;
}