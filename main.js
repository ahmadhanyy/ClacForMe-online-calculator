let input = document.getElementById("screen")
function Display (num){
    input.value += num;
}
function Clear (){
    input.value = "";
}
function Delete (){
    input.value = input.value.slice(0,-1);
}
function Calc(){
    try{
    input.value = eval(input.value);
    }
    catch(error){
        input.value = "Error"
    }
}
function Sin(){
    input.value = Math.round(Math.sin((input.value)*(Math.PI/180)));
}
function Cos(){
    input.value = Math.round(Math.cos((input.value)*(Math.PI/180)));
}
function Tan(){
    input.value = Math.round(Math.tan((input.value)*(Math.PI/180)));
}
function Power(){
    input.value = Math.pow(input.value,2);
}
function Sqrt(){
    input.value = Math.sqrt(input.value,2);
}
function Log(){
    input.value = Math.log10(input.value);
}