function clk() {
  document.getElementById("text").style.fontSize = "2em";
}

function fancy() {
  document.getElementById("text").style.fontFamily = "cursive";
  document.getElementById("text").style.color = "blue";
  document.getElementById("text").style.textDecoration = "underline";
}

function boring() {
  document.getElementById("text").style.fontFamily = "sans-serif";
  document.getElementById("text").style.fontWeight = "normal";
}

 function change() {
   if (document.getElementById("fancy").checked = true) {
     document.getElementById("text").style.fontWeight = "bold";
   }
 }

 function toUpper() {
   document.getElementById("text").style.textTransform = "uppercase";
   var str = document.getElementById("text").value;
   var parts = str.split(".");
   str = parts.join("-Moo");
   document.getElementById("text").value = str;
 }