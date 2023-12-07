function startTime(){
    var today = new Date();
    var Hour = today.getHours();
    var minutes = today.getMinutes();
    var second = today.getSeconds();


    

    let mood;
    if(Hour < 11){
        mood = "AM"
    }else{
        mood = "PM"
    }

    Hour = conCountZero(Hour)
    minutes = conCountZero(minutes)
    second = conCountZero(second)

    document.getElementById("time").innerHTML = Hour + ":" + minutes + ":" + second + " " + mood;
    setTimeout(startTime, 500)
}

function conCountZero(value){
    if(value < 10){
        value = "0" + value;
    }
    return value;
}



let screen = document.getElementById("screen")
var loader = document.getElementById("preloader")

window.addEventListener("load", function(){
    loader.style.display = "none";
})



function press(numValue){
    if(screen.value == 0){
        screen.value = " ";
    }
    screen.value += numValue;
}

function clearScreen(val){
    screen.value = val;
}


function backSpace(){
    const space = screen;
    screen.value = space.value.substring(0, space.value.length - 1);
}

function calculate(){
    if(screen.value != ""){
        try{
            clearScreen(eval(screen.value))
        }catch(erro){
            clearScreen("Error")
        }
    }
   
}


function sine(){
    screen.value = Math.sin(screen.value * Math.PI / 180);
}

function cosine(){
    screen.value = Math.cos(screen.value * Math.PI / 180);
}

function tan(){
    screen.value = Math.tan(screen.value * Math.PI / 180);
}

function invsine(){
    screen.value = Math.asin(screen.value) * (180 / Math.PI)
}

function invcosine(){
    screen.value = Math.acos(screen.value) * (180 / Math.PI)
}
function invtan(){
    screen.value = Math.atan(screen.value) * (180 / Math.PI)
}


function In(){
    screen.value = Math.log(screen.value)
}

function log(){
    screen.value = Math.log10(screen.value)
}

function percent(){
    screen.value = (screen.value / 100)
}

function square(){
    screen.value = Math.pow(screen.value, 2)
}

function cube(){
    screen.value = Math.pow(screen.value, 3)
}

function sqrt(){
    screen.value = Math.sqrt(screen.value)
}
function pi(){
    screen.value = Math.PI;
}


function plusminus(){
    var x = screen;
    var y = x.value;
    y = y * -1;
    x.value = y;
}

function Exp(){
    screen.value = Math.pow(10, screen.value)
}