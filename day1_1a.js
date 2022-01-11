// 1.a solution

function countOccurences(string, word) {
    return string.split(word).length - 1;
 }
  var text="I love teaching. If you do not love teaching what else can you love. I love JavaScript if you do not love something which can give life to your application what else can you love."; 
  console.log(countOccurences(text,"love")); 
console.log(countOccurences(text,"you")); 
