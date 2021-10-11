function myFunction() {
  var x = document.getElementById("navbar");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}
var x = document.getElementById("home");
var y = document.getElementById("aboutme");
var z = document.getElementById("contact");
function gotohome(){
  x.style.display= "block";
  y.style.display="none";
  z.style.display="none";
}
function gotoabout(){
  x.style.display="none";
  y.style.display="block";
  z.style.display="none";
}
function gotocontact(){
  z.style.display= "block";
  x.style.display="none";
  y.style.display="none";
}

function updateDate() {
  var d = new Date();
  var day=d.getDay(),
      mon=d.getMonth(),
      yy=d.getFullYear(),
      date=d.getDate(),
      h=d.getHours(),
      m=d.getMinutes(),
      s=d.getSeconds();

  var months= ["January","February","March","April","May","June","July","August","September","October","November","December"];
  var days= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  var ids=["dayname","month","daynum","year","hours","minutes","seconds"];
  var vals=[days[day],months[mon],date,yy,h,m,s];
  for(var i = 0; i < ids.length; i++)
    document.getElementById(ids[i]).firstChild.nodeValue = vals[i];
}

function loadDate() {
  updateDate();
  window.setInterval("updateDate()", 1);
}