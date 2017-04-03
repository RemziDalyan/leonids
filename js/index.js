var short_months = ['Oca', 'Sub', 'Mar', 'nis', 'May', 'Haz', 'Tem', 'Aus', 'Eyl', 'Eki', 'Kas', 'Ara'];
var week_day = ['Pzr', 'Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt'];
function setTime() {
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var mon = d.getMonth();
  var dat = d.getDate();
  var weekday = d.getDay();
  
  h = h < 10 ? '0' + h : h ;
  m = m < 10 ? '0' + m : m ;
  dat = dat < 10 ? '0' + dat : dat ;
  document.getElementById('hour').innerText = h;
  document.getElementById('minutes').innerText = m;
  document.getElementById('month').innerText = short_months[mon];
  document.getElementById('dat').innerText = dat;

document.getElementById('weekday').innerText = week_day[weekday];

}
setTime();
var set_time = window.setInterval(setTime, 10000);