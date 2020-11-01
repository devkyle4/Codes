
let SelectionSort = function (myArr)
{   
    var n = myArr.length
    var temp;
    for (var i=0;i<n;i++)
    {   
        var min = i
        for (var j=i+1;j<n;j++)
        {
            if ( myArr[min]>myArr[j])
            {
                min = j
            }
            temp = myArr[i]
            myArr[i] = myArr[min]
            myArr[min] = temp
        }
    }
    console.log(myArr.join(' '))

}


let myArr = [0,2,7,4,1,5,3]
SelectionSort(myArr)


































//    let SelectionSort = function (myArr,n)
//     { 
//         var temp;
//         for ( var i = 0; i < n-1;i++)
//         {   var flag=0
//             min = i
//             for ( var j = i+1;j<n;j++)
//             {
//                 if (myArr[j]<myArr[min])
//                 {
//                     min = j
//                     flag=1;
//                 }
               
//             }
//               if(flag==0)
//                {
//                  break
//                }
//                temp = myArr[min]
//                myArr[min] = myArr[i]
//                myArr[i] = temp
               
//                console.log(myArr.join(' '))
//         }
//         // for (i = 0; i<n;i++){
//         //     console.log((myArr[i]))
//         // }
           
//     }
   

//     var myArr = [2,7,4,1,5,3]
//        SelectionSort(myArr,6);
   
   
   
   
   
   
   
    
   
   
   
//    // var myArr = [2,7,4,1,5,3]
//     // var n=6

//     // for (var i = 0; i < n-2; i++)
//     // {
//     //     min = i
//     //     for(var j = i+1; j < n; j++)
//     //     {
//     //         if(myArr[j] < myArr[min])
//     //             min = j   //updating index of minimum element
//     //     }  
//     //         let temp = myArr[min]
//     //         myArr[min] = myArr[i]
//     //         myArr[i] = temp
//     // }    

//     // for (let a=0;a<6;a++)
//     //     console.log(myArr[a])
    







