const quotes = [
    {
        quote: "Life is a journey to be experienced, not a problem to be solved.",
        author: "Walt Disney",
    },
    {
        quote: "When you're feeling a bit out of sorts, don't worry! You're probably jst hungry.",
        author: "Walt Disney",
    },
    {
        quote: "You can't be happy every day but there are happy thins every day.",
        author: "Walt Disney",
    },
    {
        quote: "Look beyond what you see.",
        author: "Walt Disney",
    },
    {
        quote: "The past can hurt, but you can either run from it or learn from it.",
        author: "Walt Disney",
    },
    {
        quote: "The only thing we know is things don't always go the way we plan.",
        author: "Walt Disney",
    },
    {
        quote: "Success doesn't come for free. You have to do whatever it takes to seize your moment.",
        author: "Walt Disney",
    },
    {
        quote: "I can't go back to yesterday because I was a different person then.",
        author: "Walt Disney",
    },
    {
        quote: "Do not do to others what angers you if done to you by others.",
        author: "Socrates",
    },
    {
        quote: "We make a living by what we get, we make a life by what we give.",
        author: "Sir Winston Churchill"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;