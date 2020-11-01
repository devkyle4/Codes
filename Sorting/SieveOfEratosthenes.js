let Eratosthenes = function (n)
{   
   var myArr = []
   for (a=0;a<=n;a++)
   {
       myArr.push(a)
   }     

   for ( let i=0;i<=n;i++)
   {
       myArr[i] = true
   }
   myArr[0] = false
   myArr[1] = false

   for ( var i=2;i<=n;i++)
   {
       if (myArr[i])
       {
           for (let j=2;i*j<=n;j++)
           {
               myArr[i*j] = false
           }                    
       }   
   }
   
    for (i=0;i<=n;i++)
       if(myArr[i])
           console.log(i)
       
   
   
}

let myArr = 25
Eratosthenes(myArr)



