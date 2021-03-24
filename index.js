let word = "";
let leters = [];
let tryes = "";

function start() {
  word = prompt("Make a word");
  while (word =="" || word == null ) {
    word = prompt("Make a word");
  };
  let out = "";
  for (let i = 0; i < word.length; i++) {
    out = out + "*";
  };
  leters = [];
  if (word.length <= 5) {
    tryes = 3
  } else {
    tryes = word.length - 2
  };
  document.querySelector(".word").value = out;
  document.querySelector("span").innerHTML = tryes;
  document.querySelector(".test").disabled = false;
  document.querySelector(".l").value = "";
  document.querySelector(".l").focus();
};

document.querySelector(".ng").onclick = start;
window.onload = start;

function test() {
  let out = "";
  let leter = document.querySelector(".l").value;
  leters.push(leter);
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (leters.indexOf(char) != -1) {
      out = out + char;
    } else {
      out = out + "*";
    }
  };

  if (word.indexOf(leter) == -1) {
    tryes = tryes - 1;
    document.querySelector("span").innerHTML = tryes;
  };
  document.querySelector(".word").value = out;


  if (tryes == 0) {
    document.querySelector(".test").disabled = true;
    alert("You lose. My word is '" + word + "'! Let's play again!");
  };
  document.querySelector(".l").value = "";
  document.querySelector(".l").focus();
};

document.querySelector(".test").onclick = test;
document.addEventListener("keydown", function(event) {
  if (event.keyCode === 13) {
    test();
  };
});
