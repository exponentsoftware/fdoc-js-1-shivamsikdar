// 1.c


const sentence =  `I am a teacher and I love teaching. There is nothing as more rewarding as educating and empowering people. I found teaching more interesting than any other jobs. Does this motivate you to be a teacher?`
 function countWords(sentence){
      return sentence.trim().split(/\s+/).length;
  }
   console.log(countWords(sentence));