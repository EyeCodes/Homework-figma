// theme light/dark vvv
var light = true;

document.getElementById("themeBTN").onclick = function() {themeChanger(light)};

function themeChanger(a){

if (light == true){

  document.getElementById('body').style.backgroundColor = 'rgb(20, 18, 24)';
  document.getElementById('nav').style.backgroundColor = 'rgb(20, 18, 24)';
  document.getElementById('themeBTN').style.backgroundColor = '#eeed11';

  for(i = 1; i <= 4; i++){

    document.getElementById("menu-"+i).style.color = 'rgb(239, 233, 250)';

  }

  light = false;

}else{

  document.getElementById('body').style.backgroundColor = 'white';
  document.getElementById('nav').style.backgroundColor = 'white';
  document.getElementById('themeBTN').style.backgroundColor = 'rgb(20, 18, 24)';

  for(i = 1; i <= 4; i++){

    document.getElementById("menu-"+i).style.color = 'rgb(10, 0, 40)';

  }

  light = true;

}

}

//_____________________________________________________________________________________________