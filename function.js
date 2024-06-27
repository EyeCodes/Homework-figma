// theme light/dark vvv
var light = true;

document.getElementById("themeBTN").onclick = function() {themeChanger()};

function themeChanger(){

if (light == true){

  document.getElementById('body').style.backgroundColor = 'rgb(20, 18, 24)';
  document.getElementById('nav').style.backgroundColor = 'rgb(20, 18, 24)';
  document.getElementById('headerOne').style.color = 'rgb(239, 233, 250)';
  document.getElementById('themeBTN').style.backgroundColor = '#eeed11';

  for(i = 1; i <= 4; i++){

    document.getElementById("menu-"+i).style.color = 'rgb(239, 233, 250)';
    document.getElementById("coreValues-"+i).style.color = 'rgb(239, 233, 250)';
    document.getElementById("nameID-"+i).style.color = 'rgb(239, 233, 250)';
    document.getElementById("featureID-"+i).style.backgroundColor = 'rgb(10, 0, 40)';

  }

  light = false;

}else{

  document.getElementById('body').style.backgroundColor = 'white';
  document.getElementById('nav').style.backgroundColor = 'white';
  document.getElementById('headerOne').style.color = 'rgb(20, 18, 24)';
  document.getElementById('themeBTN').style.backgroundColor = 'rgb(20, 18, 24)';

  for(i = 1; i <= 4; i++){

    document.getElementById("menu-"+i).style.color = 'rgb(10, 0, 40)';
    document.getElementById("coreValues-"+i).style.color = 'rgb(10, 0, 40)';
    document.getElementById("nameID-"+i).style.color = 'rgb(10, 0, 40)';
    document.getElementById("featureID-"+i).style.backgroundColor = 'rgb(239, 233, 250)';

  }

  light = true;

}

}

//_____________________________________________________________________________________________