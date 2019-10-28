function isPalindrome(word){
  var word = word.split("");
  var i=0;
  var palindrome = true;
  console.log(word);
  while(i < word.length && palindrome===true){
    for(var j=word.length-1; j>=0 && palindrome===true; j--){
      if(word[i]==word[j]){
        palindrome = true;
      } else {
        palindrome = false;
      }
      i++;
    }
  }
  return palindrome;
}

document.getElementById("check").onclick = function(){
  var test = /^[a-z]+$/i;
  var word = document.getElementById("word").value;
  var result = document.getElementById("result");

  if(test.test(word)){
    if (isPalindrome(word)) {
      result.innerHTML = "The word entered is palindroma";
    } else {
      result.innerHTML = "The word entered is not palindrome";
    }
  } else {
    result.innerHTML = "Incorrect values, try again!";
    document.getElementById("word").value = null;
  }  
}


// document.getElementById("check").onclick = function(){

//   var test = /^[a-z]+$/i;
//   var name = document.getElementById("word").value;
//   var result = document.getElementById("result");

//   if(test.test(name)){
//     var word;
//     var palindrome = true;
//     word = name.split("");
//     var i=0;
//     while(i < word.length && palindrome===true ){
//       for(var j=word.length-1; j>=0 && palindrome===true; j--){
//         console.log(word[i] + " i" + i);
//         console.log(word[j] + " j" + j);
//         if(word[i]==word[j]){
//           console.log("if");
//           palindrome=true;
//         } else {
//           console.log("else");
//           palindrome=false;
//         }
//         i++;
//       }
//     }

//     if(palindrome==true){
//       result.innerHTML = "Yes";
//     } else{
//       result.innerHTML = "No";
//     }
//   } else {
//     result.innerHTML = "Incorrect values, try again!";
//     document.getElementById("word").value = null;
//   }  
// }
