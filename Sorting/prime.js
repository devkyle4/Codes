let Prime = function (num)
{
    var flag = 0
    for ( var i=2;i<=Math.sqrt(num).toFixed();i++)
    {
        if(num%i==0)
          {
             flag=1   
             break;  
          }
    }
    if (flag==0){
       console.log("Prime Number")
   }

   else{
    console.log("Not Prime Number")
   }
  
}

Prime(1)