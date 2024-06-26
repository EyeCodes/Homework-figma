
// form
document.getElementById("orderServiceBtn").onclick = function() {orderServiceForm()};
document.getElementById("closeBTN").onclick = function() {orderServiceFormClose()};

// Mobile Collapse
document.getElementById("menu").onclick = function() {navMenuCollapse()};
document.getElementById("closeMenu").onclick = function() {navMenuCollapseClose()};

window.onresize = function() {

  document.getElementById("menu-container").setAttribute("class", "navMenu-container-close");
  document.getElementById("menu-container").setAttribute("style", "display:none");
  document.getElementById("closeMenu").setAttribute("style", "display:none");

};

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

// menu collapse

function navMenuCollapse(){
  
  document.getElementById("menu-container").setAttribute("style", "display:normal");
  document.getElementById("menu-container").setAttribute("class", "navMenu-container");
  document.getElementById("closeMenu").setAttribute("style", "display:normal");

}

function navMenuCollapseClose(){
  
  document.getElementById("menu-container").setAttribute("class", "navMenu-container-close");
  setTimeout(function(){
    document.getElementById("menu-container").setAttribute("style", "display:none");
    document.getElementById("closeMenu").setAttribute("style", "display:none");
}, 100);

}

//_____________________________________________________________________________________________