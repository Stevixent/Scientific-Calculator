 //For Value
 function d(val){
    document.getElementById('result').value += val;
 }

 //Function for solving
 function solve() {
    var dataValue = document.getElementById('result').value;
    let res = eval(dataValue);
    document.getElementById('result').value = res;
 }

 //Clear Value On Click
 function clr() {
    document.getElementById('result').value = " ";
 }

 //Function addChar
 function addChar(input, char) {
    if(input.value == null || input.value == "0"){
      input.value = char; 
    }else{
        input.value += char;
    }
 } 

 function deleteChar(input){
    input.value = input.value.substring(0, input.value.length -1);
 }

 //Function CheckNum
 function CheckNum(str) {
    for(var i = 0; i< str.length; i++){
        var ch = str.substring(i, i+1);
        if(ch < "0" || ch > "9"){
            if(ch != "/" && ch != "*" && ch != "+" && ch != "-" && ch != "."
               && ch != "(" && ch != ")" ){
                alert("invalid Entry");
                return false;
            }
        }
    }
    return true;
 }

 //Function Cubic Root
 function cbrt(form) {
    form.result.value = Math.cbrt(form.result.value);  
 }
  
 function exp(form){
     form.result.value = Math.exp(form.result.value);
 }

 //Fucntion for Log
 function ln(form) {
     form.result.value = Math.log(form.result.value);
 }

 // Function for Square Root
 function sqrt(form) {
    form.result.value = Math.sqrt(form.result.value);
 }


 function square(form) {
    form.result.value = eval(form.result.value) * eval(form.result.value);
 }

function changeSign(input) {
    if(input.value.substring(0,1) == "-") {
        input.value = input.value.substring(1, input.value.length);
    }else{
        input.value = "-" + input.value;
    }
} 