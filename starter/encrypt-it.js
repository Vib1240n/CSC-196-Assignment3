/*
 * Starter file
 */
document.addEventListener(
  "DOMContentLoaded",
  function () {
    console.log("Window loaded!");
  },
  false
);

function encrypt() {
  console.log("encryptIt() called");
  var cipherType = document.getElementById("cipher-type");
  var inputText = document.getElementById("input-text").value;
  if (cipherType.value == "shift") {
    shiftCipher(inputText);
  }
  if (cipherType.value == "random") {
    randomCipher(inputText);
  }
}

function twelve() {
  document.getElementById("input-text").style.fontSize = "12pt";
  document.getElementById("result").style.fontSize = "12pt";
}

function twentyFour() {
  document.getElementById("input-text").style.fontSize = "24pt";
  document.getElementById("result").style.fontSize = "24pt";
}
function shiftCipher(message) {
  message = message.toLowerCase();
  let cipher = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i] < "a" || message[i] > "z") {
      cipher += message[i];
    } else if (message[i] == "z") {
      cipher += "a";
    } else {
      // letter is between 'a' and 'y'
      let char = message.charCodeAt(i);
      let cipherChar = String.fromCharCode(char + 1);
      cipher += cipherChar;
    }
  }
  var allCaps = document.getElementById("all-caps");
  if (allCaps.checked == true) {
    cipher = cipher.toUpperCase();
  }
  document.getElementById("result").innerHTML = cipher;
}

function randomCipher(message) {
  message = message.toLowerCase();
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var length = 26;
  let cipher = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i] == " ") {
      result += " ";
    } else {
      cipher += alphabet.charAt(Math.floor(Math.random() * length));
    }
  }
  var allCaps = document.getElementById("all-caps");
  if (allCaps.checked == true) {
    cipher = cipher.toUpperCase();
  }
  document.getElementById("result").innerHTML = cipher;
}

function reset() {
  document.getElementById("input-text").value = "";
  document.getElementById("result").value = "";
  document.getElementById("input-text").style.fontSize = "12pt";
  document.getElementById("result=").style.fontSize = "12pt";
  document.getElementById("all-caps").checked = false;
}
