//get the plus button
var plus = document.getElementsByClassName("plus");

//get the minus button
var minus = document.getElementsByClassName("minus");


//bond an event to the buttons
for(var i = 0; i < plus.length; i++){
    plus[i].addEventListener("click", plusHandler);
    minus[i].addEventListener("click", minusHandler)
}
function plusHandler(event){
    var numberElement = event.target.parentNode.children[1].innerHTML;
    var number = parseInt(numberElement);
    event.target.parentNode.children[1].innerHTML = number + 1;
    
}
function minusHandler(event){
    var numberElement = event.target.parentNode.children[1].innerHTML;
    var number = parseInt(numberElement);
    if(number >= 1){
        event.target.parentNode.children[1].innerHTML = number - 1;
        
    }
    
}
