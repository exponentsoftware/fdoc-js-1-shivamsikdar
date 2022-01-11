// 1.d

const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
 const countUniqueWords = text => {
   const words = new Set();
   text.toLowerCase().replace(/\w+/g, word => words.add(word));
   return words.size;        
 }
 console.log(countUniqueWords(sentence));

    