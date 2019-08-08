console.log('hello');

var total = document.getElementById("total");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var newNumber = document.getElementById("Number");

newNumber.value = 1;


add.addEventListener('click', function(e){
    
    var input= Number(newNumber.value); 
    var increase = Number(total.textContent);
    
    var final = input + increase;
    total.textContent = final;
    
 
})

subtract.addEventListener('click', function(e){
    
    var input = Number(newNumber.value); 
    var increase = Number(total.textContent);
    
    var minus = increase - input;
    total.textContent = minus;
    
    
})
