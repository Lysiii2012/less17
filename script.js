class Calculator {
    add(...numbers) {
        return numbers.reduce((acc, num) => acc + num, 0);
    }

    subtract(...numbers) {
        if (numbers.length === 0) return 0;
        return numbers.slice(1).reduce((acc, num) => acc - num, numbers[0]);
    }

    multiply(...numbers) {
        if (numbers.length === 0) return 0;
        return numbers.reduce((acc, num) => acc * num, 1);
    }

    divide(...numbers) {
        if (numbers.length === 0) return 0;
        return numbers.slice(1).reduce((acc, num) => {
            if (num === 0) {
                throw new Error("На 0 ділити не можна");
            }
            return acc / num;
        }, numbers[0]);
    }
}


const calc = new Calculator();

console.log(calc.add(5, 3)); 
console.log(calc.subtract(10, 4));  
console.log(calc.multiply(3, 6));  
console.log(calc.divide(8, 2));  
