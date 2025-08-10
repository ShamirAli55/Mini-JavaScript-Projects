const quote = [
  "The best way to get started is to quit talking and begin doing.",
  "Don't let yesterday take up too much of today.",
  "It’s not whether you get knocked down, it’s whether you get up.",
  "If you are working on something exciting, it will keep you motivated.",
  "Success is not in what you have, but who you are.",
  "The harder you work for something, the greater you’ll feel when you achieve it.",
  "Dream bigger. Do bigger.",
  "Don’t watch the clock; do what it does. Keep going.",
  "Great things never come from comfort zones.",
  "Push yourself, because no one else is going to do it for you.",
  "Sometimes later becomes never. Do it now.",
  "Little things make big days.",
  "It’s going to be hard, but hard does not mean impossible.",
  "Don’t stop when you’re tired. Stop when you’re done.",
  "Wake up with determination. Go to bed with satisfaction.",
  "Do something today that your future self will thank you for.",
  "Believe you can and you’re halfway there.",
  "Opportunities don't happen. You create them.",
  "Success doesn’t just find you. You have to go out and get it.",
  "Your limitation—it’s only your imagination."
];

const GenerateQuote = ()=>
{
    let paragraph = document.getElementById("quote");
    const index = Math.round(Math.random() * 20 + 1);
    let random_quote = quote[index];
    paragraph.textContent = random_quote;
}