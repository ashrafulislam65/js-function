// Task-2
// Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
function evenOdd(num)
{
    if(num%2!==0)
    {
        let odd = num*2;
        return odd;

    }
    else{
        let even = num/2;
        return even;
    }
}
const output = evenOdd(6);
console.log(output);

