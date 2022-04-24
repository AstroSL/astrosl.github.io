function bigger() {  
    document.getElementById("text").style.fontSize = "24pt";
    alert("Hello, world!");
  }

//bigger
function big() {
   var text = document.getElementById("text");
   text.style.fontSize = "24pt";
}

//bold
function bold() {
   var text = document.getElementById("text");
   text.style.fontWeight = "bold";
   text.style.color= "blue";
   text.style.textDecoration= "underline";
}

//unbold
function bbetty() {
   var text = document.getElementById("text");
   text.style.fontSize = "initial";
   text.style.fontWeight = "normal";
   text.style.color = "black";
   text.style.textDecoration= "none";
}

//uppercase+ -Moo suffix
function moo() {
   var suffix = '-Moo',
   txt = document.getElementById('text');
   txt.style.textTransform="uppercase";
   txt.value = txt.value.split('.').join('') + suffix;
}
