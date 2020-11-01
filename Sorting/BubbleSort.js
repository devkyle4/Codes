let BubbleSort = function (myArr)
{   
    var n = myArr.length
    var temp;
    for (let i=0;i<n;i++)
    {
        var flag = 0;
         for (let j=0;j<n-i+1;j++)
         {
             if (myArr[j]>myArr[j+1])
             {
                temp = myArr[j]
                myArr[j] = myArr[j+1]
                myArr[j+1] = temp
                flag = 1
             }
             
         }
         if (flag == 0)
         {
             break;
         }
         console.log(myArr.join(' '))
    }
    
   
}

let myArr = [0,2,7,4,1,5,3]
BubbleSort(myArr)