//  display on a template, a count down timer .. as if you only had 2
//  minute to purchase something .. or 10 mins to make a selection in
//  a game ... try to make the timer as close to a real clocks time as possible

function setup(){
  let timer = document.getElementById('#timer');
  timer.innerHTML("counter");
    let counter=0;
function timeIt(){
  counter++;
  timer.html(counter)
}
    setInterval(timeIt,1000)
}

