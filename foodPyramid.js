var buttons = document.getElementsByClassName("changeAgeGroup");
for(var i = 0; i < buttons.length; i++){
    buttons[i].addEventListener("click", ageHandler);
}
var over5 = true;

//get the plus button
var plus = document.getElementsByClassName("plus");

//get the minus button
var minus = document.getElementsByClassName("minus");

//get the number circle in each layer
var numberCircles = document.getElementsByClassName("number")

//get all trapeziums
var trapeziums = document.getElementsByClassName("trapezium");
trapeziums[1].food = "Meat, poultry, fish, eggs, beans and nuts";
trapeziums[2].food = "Milk, yogurt and cheese";

function ageHandler(event){
    //reset the food triangle
    //reset the top triangle
    document.getElementsByClassName("triangle")[0].style.setProperty('--border', "130px");

    //reset the five trapeziums
    trapeziums[0].style.setProperty('--height', "100px");
    trapeziums[0].style.setProperty('width', "280px");
    var trapeziumWidth = 500;
    for(var i = 1; i < trapeziums.length; i++){        
        trapeziums[i].style.setProperty('width', trapeziumWidth + "px");
        trapeziumWidth += 200;
        trapeziums[i].style.setProperty('--height', "100px");
    }
    //reset the number circle
    for(var i = 0; i < numberCircles.length; i++){
        numberCircles[i].style.setProperty('background-color', 'white');
        numberCircles[i].innerHTML = 0;
    }
    if(event.target == buttons[0]){
        over5 = false;
        buttons[0].style.setProperty('background-color', 'lightskyblue');
        buttons[1].style.setProperty('background-color', 'lightgray');
        trapeziums[3].style.setProperty('--color-bottom-second', '#31f869');
        trapeziums[4].style.setProperty('--color-bottom', '#905a3d');
        //set recommended quantities for each kind of food
        trapeziums[1].recoMin = 2;
        trapeziums[1].recoMax = 4;
        trapeziums[2].recoMin = 3;
        trapeziums[2].recoMax = 3;
        trapeziums[3].recoMin = 2;
        trapeziums[3].recoMax = 5;
        trapeziums[4].recoMin = 3;
        trapeziums[4].recoMax = 6;
        trapeziums[3].food = "Vegetables, salad and fruit";
        trapeziums[4].food = "Cereals and breads, potatoes, pasta and rice";
        
    }else{
        over5 = true;
        buttons[1].style.setProperty('background-color', 'lightskyblue');
        buttons[0].style.setProperty('background-color', 'lightgray');
        trapeziums[3].style.setProperty('--color-bottom-second', '#905a3d');
        trapeziums[4].style.setProperty('--color-bottom', '#31f869');
        //set recommended quantities for each kind of food
        trapeziums[1].recoMin = 2;
        trapeziums[1].recoMax = 2;
        trapeziums[2].recoMin = 3;
        trapeziums[2].recoMax = 3;
        trapeziums[3].recoMin = 3;
        trapeziums[3].recoMax = 5;
        trapeziums[4].recoMin = 5;
        trapeziums[4].recoMax = 7;
        trapeziums[4].food = "Vegetables, salad and fruit";
        trapeziums[3].food = "Cereals and breads, potatoes, pasta and rice";
    }
}


//bond an event to the buttons
for(var i = 0; i < plus.length; i++){
    plus[i].addEventListener("click", plusHandler);
    minus[i].addEventListener("click", minusHandler)
}
function plusHandler(event){
    var numberElement = event.target.parentNode.children[1];
    var number = parseInt(numberElement.innerHTML);
    numberElement.innerHTML = number + 1;

    var shape = event.target.parentNode.parentNode;
    var width = parseInt(window.getComputedStyle(shape).getPropertyValue("width"));
    if(width == 0){
        //set the background of number circle as red
        numberElement.style.setProperty('background-color',"red");
        alert("You had too much fat / sugar / salt !!!!")
        var borderWidth = parseInt(window.getComputedStyle(shape).getPropertyValue("--border"));
        shape.style.setProperty('--border', (borderWidth + 5) + "px");
        
        for(var i = 0; i < trapeziums.length; i++){
            var trapeziumWidth = parseInt(window.getComputedStyle(trapeziums[i]).getPropertyValue("width"));
            trapeziums[i].style.setProperty('width', (trapeziumWidth + 10) + "px");
        }
    }else{
        var height = parseInt(window.getComputedStyle(shape).getPropertyValue("--height"));
        shape.style.setProperty('--height', (height + 5) + "px");
        for(var i = 0; i < trapeziums.length; i++){
            trapeziums[i].index = i;
            if(i > shape.index){
                var trapeziumWidth = parseInt(window.getComputedStyle(trapeziums[i]).getPropertyValue("width"));
                trapeziums[i].style.setProperty('width', (trapeziumWidth + 10) + "px");
            }
        }
        if(shape.index == 0){
            //set the background of number circle as red
            numberElement.style.setProperty('background-color',"red");
            alert("For fat, spreads and oils, You should use as little as possible!")
        }else if(number+1 < shape.recoMin){
            numberElement.style.setProperty('background-color',"purple");
            alert("You need more " + shape.food + "!");
        }else if(number+1 > shape.recoMax){
            numberElement.style.setProperty('background-color',"red");
            alert("You had too much " + shape.food + "!!!");
        }else{
            numberElement.style.setProperty('background-color',"lightgreen");
        }
    }
}
function minusHandler(event){
    var numberElement = event.target.parentNode.children[1];
    var number = parseInt(numberElement.innerHTML);
    
    if(number >= 1){
        event.target.parentNode.children[1].innerHTML = number - 1;
        var shape = event.target.parentNode.parentNode;
        var width = parseInt(window.getComputedStyle(shape).getPropertyValue("width"));
        if(width == 0){
            
            var borderWidth = parseInt(window.getComputedStyle(shape).getPropertyValue("--border"));
            shape.style.setProperty('--border', (borderWidth - 5) + "px");
            
            for(var i = 0; i < trapeziums.length; i++){
                var trapeziumWidth = parseInt(window.getComputedStyle(trapeziums[i]).getPropertyValue("width"));
                trapeziums[i].style.setProperty('width', (trapeziumWidth - 10) + "px")
            }
        }else{
            var height = parseInt(window.getComputedStyle(shape).getPropertyValue("--height"));
            shape.style.setProperty('--height', (height - 5) + "px");
            for(var i = 0; i < trapeziums.length; i++){
                trapeziums[i].index = i;
                if(i > shape.index){
                    var trapeziumWidth = parseInt(window.getComputedStyle(trapeziums[i]).getPropertyValue("width"));
                    trapeziums[i].style.setProperty('width', (trapeziumWidth - 10) + "px")
                }
            }
            if(number-1 < shape.recoMin){
                numberElement.style.setProperty('background-color',"purple");
                alert("You need more " + shape.food + "!");
            }else if(number-1 > shape.recoMax){
                numberElement.style.setProperty('background-color',"red");
            }else{
                numberElement.style.setProperty('background-color',"lightgreen");
            }
        }
        if(number == 1){
            //reset the background of number circle
            numberElement.style.setProperty('background-color',"white");
        }
    }
    
}


