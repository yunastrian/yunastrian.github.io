function button(event,x){ 
    event.preventDefault() 
    var j = document.getElementsByClassName("mainin").length; 
    var i;
    i = 2;
    document.getElementById(i).style.display = "none";
    document.getElementById(x).style.display = "inline"; 
}