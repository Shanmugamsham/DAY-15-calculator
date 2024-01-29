
function clearScreen() {
    document.getElementById("result").value = "";
}
 
function display(enter_value) {
    document.getElementById("result").value=document.getElementById("result").value+enter_value;
}


function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
    
}
