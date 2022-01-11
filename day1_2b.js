// 2.b

const nums = new Set();
 while(nums.size !== 7) {
   nums.add(Math.floor(Math.random() * 9) + 1);
 }

 console.log([...nums]);