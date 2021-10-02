function CALLME() 
{
  var person = prompt("Enter Your Name", "Caesto Marco");
  if (person != "") 
  {
    document.getElementById("INPUT_NAME").innerHTML =
    "Hai, " + person + "!" + "<br>" + "Selamat Datang Di ProWeb";
  }
  else
  {
    document.getElementById("INPUT_NAME").innerHTML =
    "Hai!" + "<br>" + "Selamat Datang Di ProWeb";
  }
}

function TOPFUNCTION() 
{
  var BUTTON_TOP = document.getElementById("BUTTON_TOP");
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrollFunction() 
{
  var BUTTON_TOP = document.getElementById("BUTTON_TOP");
  if (document.body.scrollTop > 750 || document.documentElement.scrollTop > 750) 
  {
  BUTTON_TOP.style.display = "block";
  } 
  else 
  {
  BUTTON_TOP.style.display = "none";
  }
}


window.onscroll = function() 
{
  scrollFunction()
};



