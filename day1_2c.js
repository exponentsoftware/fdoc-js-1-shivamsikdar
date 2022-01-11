// 2.c

function reverse(array) {
        var output = [];
       while (array.length) {
         output.push(array.pop());
       }
      
        return output;
       }
      
       console.log(reverse(["A","B","C"]));