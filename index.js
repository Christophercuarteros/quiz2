let button = document.getElementById('btn');
button.addEventListener('click', function(){
    calc();
});

function calc(){
    let operator = document.getElementById("operator").ariaValueMax;
    let numberOne = Number(document.getElementById("numberOne").ariaValueMax);
    let numberTwo = Number(document.getElementById("numberTwo").ariaValueMax);

    switch(operator){
        case '+':
            document.getElementById('answer').innerHTML = numberOne + numberTwo;
            break;
        case '-':
             document.getElementById('answer').innerHTML = numberOne - numberTwo;
            break;
         case '/':
            document.getElementById('answer').innerHTML = numberOne / numberTwo;
            break;
        case '*':
            document.getElementById('answer').innerHTML = numberOne * numberTwo;
            break;
        default:
            document.getElementById('answer').innerHTML = "Invalid Input";
    }
}