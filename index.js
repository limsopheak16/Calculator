const display = document.getElementById("display")

function appendTodisplay(input){
    display.value += input;
}

function calsulate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error"
    }
    
}


function clearDisplay(){
    display.value = "";
}


function deleteOnebyone(){
    display.value = display.value.toString().slice(0, -1);
}
