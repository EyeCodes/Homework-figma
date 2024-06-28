// theme light/dark vvv
var light = true;

document.getElementById("orderServiceBtn").onclick = function() {orderSeriveForm()};
document.getElementById("form-container").onclick = function() {orderSeriveFormClose()};

function orderSeriveForm(){

  document.getElementById("form-container").setAttribute("class", "form-section");
  document.getElementById("form-fill-up").setAttribute("class", "form-order-service");

}

function orderSeriveFormClose(){

  document.getElementById("form-container").removeAttribute("class", "form-section");
  document.getElementById("form-fill-up").removeAttribute("class", "form-order-service");

}



//_____________________________________________________________________________________________