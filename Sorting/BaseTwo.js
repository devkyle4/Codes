let BaseTwo = function(num) 
 { 
      var remainder = []
      while (num!=0)
      { 
         remainder.push(num%2)
        num = Math.floor(num/2)
      }
      let Binary = Number(remainder.reverse().join(''))
      console.log(Binary)

 }

 BaseTwo(13)


//  let BaseTwo = function(num) 
//  { 
//       var remainder 
//       while (num!=0)
//       { 
//          remainder = (remainder*10)+(num%2) 
//         num = Math.floor(num/2)
//       }
//       let Binary = Number(remainder.reverse().join(''))
//       console.log(Binary)

//  }

//  BaseTwo()



