let factorial = (number)=>{
    if (number === 0)
    {
        return 1;
    }
    return number * factorial(number-1)
};

let addNumber= (num1,num2)=>{
    return sumNum = num1 + num2;
}



module.exports = {factorial,addNumber}