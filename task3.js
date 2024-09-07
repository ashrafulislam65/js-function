// Task-3
// Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg( num,size)
{
    let sum =0;
    
    for (let i=0;i<num.length;i++)
    {
         sum=sum+num[i];
    }
    
     let avg = sum/size;
     return avg ;
    
}
let result= make_avg([1,2,7,4],4);
console.log(result);