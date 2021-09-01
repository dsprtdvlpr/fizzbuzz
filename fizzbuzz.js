function fizzbuzz(fizzNumber, buzzNumber, number) {
    if (number % fizzNumber == 0 && number % buzzNumber == 0) {
        return "FizzBuzz";
    } else if (number % fizzNumber == 0) {
        return "Fizz";
    } else if (number % buzzNumber == 0) {
        return "Buzz";
    } else {
        return `${number}`;
    }
}

function fizzbuzzDriver(startSequence, endSequence, fizzNumber, buzzNumber) {
    for (let i = startSequence; i <= endSequence; i++) {
        console.log(fizzbuzz(fizzNumber, buzzNumber, i));
    }
}

fizzbuzzDriver(1, 100, 3, 5);