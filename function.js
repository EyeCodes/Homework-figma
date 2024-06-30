
// form
document.getElementById("orderServiceBtn").onclick = function() {orderServiceForm()};
document.getElementById("closeBTN").onclick = function() {orderServiceFormClose()};

function orderServiceForm(){

  document.getElementById("form-container").setAttribute("class", "form-section");
  document.getElementById("form-fill-up").setAttribute("class", "form-order-service");
  document.getElementById("form-fill-up").removeAttribute("style", "display:none");
}

function orderServiceFormClose(){

  document.getElementById("form-fill-up").setAttribute("style", "display:none");
  document.getElementById("form-container").removeAttribute("class", "form-section");
  document.getElementById("form-fill-up").removeAttribute("class", "form-order-service");

}



//_____________________________________________________________________________________________