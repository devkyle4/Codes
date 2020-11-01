let InsertionSort = function (myArr,n)
{
    for (var i=1;i<n;i++)
    {
        var value = myArr[i]
        var temp = i
        while ( temp > 0 && myArr[temp-1] > value)
        {
           myArr[temp] = myArr[temp-1]
           temp = temp-1
        }
        myArr[temp] = value
    }
   console.log(myArr.join(' '))
}

const myArr = [2,7,4,1,5,3]
InsertionSort(myArr,6)