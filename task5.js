// Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
function odd_even(num)
{
    if(num%2===0)
    {
        let even = 'even'
        return even;
    }
    else{
        let odd = 'odd';
        return odd;
    }

}
let result = odd_even(26);
console.log(result);

