var imatge=document.getElementsByTagName('img');
var tirador=document.getElementsByTagName('input');
var valor=document.getElementsByTagName('p');

//desenfocar

tirador[0].addEventListener('input', blur);

function blur(){
    valor[0].innerHTML=tirador[0].value;
    imatge[0].style.webkitFilter="blur("+tirador[0].value+"px)";
}

//grisos

tirador[1].addEventListener('input', grayscale);

function grayscale(){
    valor[1].innerHTML=tirador[1].value;
    imatge[1].style.filter="grayscale("+tirador[1].value+"%)";
}

//ombra

tirador[2].addEventListener('input', dropshadow);

function dropshadow(){
    valor[2].innerHTML=tirador[2].value;
    imatge[2].style.filter="drop-shadow("+tirador[2].value+"px "+tirador[2].value+"px "+tirador[2].value+"px yellow)";
}

//sepia

tirador[3].addEventListener('input', sepia);

function sepia(){
    valor[3].innerHTML=tirador[3].value;
    imatge[3].style.filter="sepia("+tirador[3].value+"%)";
}

//lluminositat

tirador[4].addEventListener('input', brightness);

function brightness(){
    valor[4].innerHTML=tirador[4].value;
    imatge[4].style.filter="brightness("+tirador[4].value+"%)";
}

//contrast

tirador[5].addEventListener('input', contrast);

function contrast(){
    valor[5].innerHTML=tirador[5].value;
    imatge[5].style.filter="contrast("+tirador[5].value+"%)";
}

//to

/*
tirador[6].addEventListener('input', hue-rotate);

function hue-rotate(){
    valor[6].innerHTML=tirador[6].value;
    imatge[6].style.filter="hue-rotate("+tirador[6].value+"deg)";
}
*/

//invertir

tirador[7].addEventListener('input', invert);

function invert(){
    valor[7].innerHTML=tirador[7].value;
    imatge[7].style.filter="invert("+tirador[7].value+"%)";
}

//saturar

tirador[8].addEventListener('input', saturate);

function saturate(){
    valor[8].innerHTML=tirador[8].value;
    imatge[8].style.filter="saturate("+tirador[8].value+"%)";
}

//opacitat

tirador[9].addEventListener('input', opacity);

function opacity(){
    valor[9].innerHTML=tirador[9].value;
    imatge[9].style.filter="opacity("+tirador[9].value+"%)";
}