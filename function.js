// theme light/dark vvv
var light = true;

document.getElementById("orderServiceBtn").onclick = function() {orderSeriveForm()};
document.getElementById("closeBTN").onclick = function() {orderSeriveFormClose()};

function orderSeriveForm(){

  document.getElementById("form-container").setAttribute("class", "form-section");
  document.getElementById("form-fill-up").setAttribute("class", "form-order-service");
  document.getElementById("form-fill-up").removeAttribute("style", "display:none");
}

function orderSeriveFormClose(){

  document.getElementById("form-fill-up").setAttribute("style", "display:none");
  document.getElementById("form-container").removeAttribute("class", "form-section");
  document.getElementById("form-fill-up").removeAttribute("class", "form-order-service");

}



//_____________________________________________________________________________________________