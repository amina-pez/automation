function mouseOver() {
  document.getElementById("demo2").style.color = "red";
}

function mouseOut() {
  document.getElementById("demo2").style.color = "black";
}
//alert box
function simpleAlert(){
window.alert("This is a simple alert box! \nYou can't escape from me until you click 'OK'!");
}
//confirm box
function clickToConfirm(){
window.confirm("Click 'OK' or 'Cancel'.");
}
//prompt box
function clickToPrompt(){
var txt;
		  var person = prompt("Please enter your name:", "Harry Potter");
		  if (person == null || person == "") {
			txt = "User cancelled the prompt.";
		  } else {
			txt = "Hello " + person;
		  }
		  document.getElementById("demo").innerHTML = txt;
}
//new browser window
function newWindow(){
window.open("https://nahla.ba/", "_blank");
}
//new google page with specified width and height
function windowToMaximize(){
window.open("https://www.google.com/", '_blank', 'location=yes,height=570,width=520,scrollbars=yes,status=yes');
}
//sortable list
$("#sortable").sortable();

function hideElement() {
  var x = document.getElementById("displayed-text");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}