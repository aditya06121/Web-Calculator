// logic of calculator
const display = document.getElementById("display");
window.addEventListener('load', function() {
    display.focus();
});

function append_to_display(input){
    display.value += input;
}
function clear_screen(){
    display.value="";
}
function calculate(){
    try{
    display.value=eval(display.value);
    }
    catch(error){
        display.value="Error";
    }
}
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        calculate();
    }
});