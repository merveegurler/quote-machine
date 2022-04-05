const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

const authors = [
  "Kevin Kruse",
  "Napoleon Hill",
  "Albert Einstein",
  "Robert Frost",
  "Florence Nightingale",
  "Wayne Gretzky",
  "Michael Jordan",
  "Amelia Earhart",
  "Babe Ruth",
  "W. Clement Stone",
  "Kevin Kruse",
  "John Lennon",
  "Earl Nightingale"
];

const texts = [
  "Life isn’t about getting and having, it’s about giving and being.",
  "Whatever the mind of man can conceive and believe, it can achieve.",
  "Strive not to be a success, but rather to be of value.",
  "Two roads diverged in a wood, and I—I took the one less traveled by, And that has made all the difference.",
  "I attribute my success to this: I never gave or took any excuse.",
  "You miss 100% of the shots you don’t take.",
  "I’ve missed more than 9000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life. And that is why I succeed.",
  "The most difficult thing is the decision to act, the rest is merely tenacity.",
  "Every strike brings me closer to the next home run.",
  "Definiteness of purpose is the starting point of all achievement.",
  "We must balance conspicuous consumption with conscious capitalism.",
  "Life is what happens to you while you’re busy making other plans.",
  "We become what we think about."
];

const color = Math.floor(Math.random()*colors.length);

let quote = Math.floor(Math.random()*texts.length);
console.log(texts[quote]);
(document).getElementById("text").innerHTML = texts[quote];

(document).getElementById("author").innerHTML = "- " + authors[quote];

(document).getElementById("body").style.backgroundColor = colors[color];

(document).getElementById("text").style.color = colors[color];

(document).getElementById("author").style.color = colors[color];

(document).getElementById("tweet-quote").style.backgroundColor = colors[color];

(document).getElementById("new-quote").style.backgroundColor = colors[color];

(document).getElementById("left").style.color = colors[color];

function getQuote() {
  const color = Math.floor(Math.random()*colors.length);

  const quote = Math.floor(Math.random()*texts.length);

  (document).getElementById("text").innerHTML = texts[quote];

  (document).getElementById("author").innerHTML = "- " + authors[quote];

  (document).getElementById("body").style.backgroundColor = colors[color];

  (document).getElementById("text").style.color = colors[color];

  (document).getElementById("author").style.color = colors[color];

  (document).getElementById("tweet-quote").style.backgroundColor = colors[color];

  (document).getElementById("new-quote").style.backgroundColor = colors[color];

  (document).getElementById("left").style.color = colors[color];
}

(document).getElementById("new-quote").addEventListener("click", getQuote);

$('#tweet-quote').attr(
    'href',
    'https://twitter.com/intent/tweet?text=' +
      encodeURIComponent('"' + texts[quote] + '" ' + '"' + authors[quote] + '"')
);