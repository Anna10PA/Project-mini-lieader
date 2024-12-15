
let display = document.getElementById('display')

function number(value){
    display.value = display.value + value;
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = 'ERROR'
        // alert('მორჩი მაიმუნობას')
    }
}
function procent(){
    display.value = display.value / 100
}
function Clear(){
    display.value = ''
}
function clear_last(){
    display.value = display.value.slice(0, -1)
}
