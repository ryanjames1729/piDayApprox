var index = 0;
var sum = 0;
var t;

function addTerms(){
  sum += Math.pow(-1,index)*1/(2*index+1);
  var total = 4 * sum;
  index++;
  document.getElementById("index").innerHTML = "Number of terms: " + index;
  document.getElementById("approx").innerHTML = "Approximation = " + total;
  start();
}


function start(){
  t = setTimeout(addTerms, 1000);
}


function stop() {
    clearTimeout(t);
}
