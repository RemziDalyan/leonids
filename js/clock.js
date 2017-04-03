setInterval(function clock(){
  var now = new Date();
  var h = now.getHours();
  var m = now.getMinutes();
  var s = now.getSeconds();
  
  if ( h < 10 ){
    h = "0" + h;
  }
  
  if ( m < 10 ){
    m = "0" + m;
  }
  
  if ( s < 10 ){
    s = "0" + s;
  }
  
  var elem = document.getElementById("display");
  
  elem.innerHTML = h + ":" + m + ":" +s;
}, 1000);
