var ele=document.body.querySelector(".box");

// These are the conditional statements for the user to answer the prompts.

var num1 = prompt("Type a number.")
if(isNaN(num1)){
    document.write(num1 + " is not a number. Hint: Do not type the number in word form. ");
}else {
    document.write(num1 + " is a number. ");
}

var checkee=prompt("Type an operator.");
if (checkee=='%'||checkee=='*'||checkee=='+'||checkee=='-'){
    ele.innerHTML="That is an operator. ";
}else {
    ele.innerHTML="That is not an operator. Hint: Use the symbols for addition (+), subtraction (-), multiplication (*), or division (%). ";
}

var num2 = prompt("Type another number.")
if(isNaN(num2)) {
    document.write(num2 + " is not a number. Hint: Do not write the number in word form. ");
}else {
    document.write(num2 + " is a number. ");
}

// These are the conditional statements depending on which operator the user put in.

if (checkee=='%'){
    var division=num1/num2;
    document.write(num1+" divided by "+num2+" equals "+division);
}else{}

if (checkee=='*'){
    var multiplication=num1*num2;
    document.write(num1+" multiplied by "+num2+" equals "+multiplication);
}else{}

if (checkee=='+'){
    var addition=num1+num2;
    document.write(num1+" plus "+num2+" equals "+addition);
}else{}

if (checkee=='-'){
    var subtraction=num1-num2;
    document.write(num1+" minus "+num2+" equals "+subtraction);
}else{}