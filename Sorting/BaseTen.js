//Converting Binary to Decimal
let BaseTen = function(num) 
{   
    
    num = num.toString()
    var Keeper = []
    var Denary = 0
      for(let i=0;i<num.length;i++) 
        {    
           Keeper.push(num.charAt(i))
        }
        var i = Keeper.length-1
        var index = 0
          while (i>=0)
        {
        const digit = Number(Keeper[index])
            Denary = Number(Denary + digit*Math.pow(2,i))
            i--
            index++
        }
        // var i = 0
        // for (let index = Keeper.length-1; index >=0 ; index--) {   
        //     var digit = Number(Keeper[i])
        //     Denary = Number(Denary + (digit*Math.pow(2,index)))
        //     i++
        // }
        console.log(Denary);
    
        
}

  

    BaseTen(1111);




















// Number Reversal

// let BaseTen = function(num) 
// {
//     var exponent = num.toString().length-1
//     var answer = 0
    
//       while (num > 0)
//     {   
//         var remainder = (num%10);
//         answer = answer + (remainder*Math.pow(10,exponent));
//         console.log(exponent)
//         exponent = exponent-1;
//         num = (num/10).toFixed();
//         }
        
    
//     console.log(answer);
// }

  

//     BaseTen(243);
























// let BaseTen = function(num) 
// {

//     var exponent= 0
//     var answer = 0
    
//       while (num > 0)
//     {   
//         var remainder = (num%10);
//         answer = answer + (remainder*Math.pow(10,exponent));
//         exponent = exponent+1;
//         num = (num/10).toFixed();
//         }
        
    
//     console.log(answer);
// }

  

//     BaseTen(144);



