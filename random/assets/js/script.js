function checkNumber (value) {
  if(isNaN(value) || value === "" || value === null){
    return false;
  } else {
    return true;
  }
}

function evenOrOdd(number,min,max){
  if(checkNumber(number) && number>=min && number<=max){
    var winner;
    var number = parseInt(number);
    var numberPc = Math.floor(Math.random()*max)+1;
    var result = numberPc+number;
    if(result % 2 == 0){
      winner = "even";
    } else {
      winner = "odd";
    }
    return winner;
  } else{
    return false;
  }
}


document.getElementById("check").onclick = function(){

  var choice = document.getElementById("choice").value;
  var number = document.getElementById("number").value;
  var result = document.getElementById("result");

  if(evenOrOdd(number,1,5)===choice){
    result.innerHTML = "You win";
  } else{
    result.innerHTML = "You lose";
  }
    
}

