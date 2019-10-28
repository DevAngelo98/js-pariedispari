function isPalindrome(word){
  var word = word.split("");
  var i=0;
  while(i < word.length){
    for(var j=word.length-1; j>=0; j--){
      if(word[i]==word[j]){
        return true;
      } else {
        return false;
      }
      i++;
    }
  }
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
//   var name = document.getElementById("name").value;
//   var result = document.getElementById("result");

//   if(test.test(name)){
//     var word;
//     var palindrome = false;
//     word = name.split("");
//     var i=0;
//     while(i < word.length){
//       for(var j=word.length-1; j>=0; j--){
//         if(word[i]==word[j]){
//           palindrome=true;
//         } else {
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
//     document.getElementById("name").value = null;
//   }  
// }
