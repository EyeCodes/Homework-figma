
// Mobile Collapse
document.getElementById("menu").onclick = function() {navMenuCollapse()};
document.getElementById("closeMenu").onclick = function() {navMenuCollapseClose()};

window.onresize = function() {

  document.getElementById("menu-container").setAttribute("class", "navMenu-container-close");
  document.getElementById("menu-container").setAttribute("style", "display:none");
  document.getElementById("closeMenu").setAttribute("style", "display:none");

};

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