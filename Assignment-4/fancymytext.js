//create alert in
//wrap alert in function
function alert() {
  alert("Hello World");
}

//create function to make text bigger
function bigger() {
  document.getElementById("textArea").style.fontSize = "24pt";
  alert("Bigger");
}

function fancy() {
  var words = document.getElementById("textArea");
  if (document.getElementById("fancy").checked) {
    alert("Fancy Shmancy");
    textArea.style.fontWeight = "bold";
    textArea.style.color = "blue";
    textArea.style.textDecoration = "underline blink";
  }
}

function boring() {
  var check = document.getElementById("fancy");
  var words = document.getElementById("textArea");
  if (document.getElementById("boring").checked) {
    alert("Boring");
    textArea.style.fontWeight = "normal";
    textArea.style.color = "black";
    textArea.style.textDecoration = "none";
  }
}

function moo() {
  var textArea = document.getElementById("textArea");
  var text = textArea.value;
  var newText = text.toUpperCase();
  var mooText = newText.split(".").join("-Moo.");
  textArea.value = mooText;
}

//reset function
function reset() {
  document.getElementById("textArea").value = "";
  document.getElementById("fancy").checked = false;
  document.getElementById("boring").checked = false;
  document.getElementById("textArea").style.fontSize = "12pt";
  document.getElementById("textArea").style.fontWeight = "normal";
  document.getElementById("textArea").style.color = "black";
  document.getElementById("textArea").style.textDecoration = "none";
}
