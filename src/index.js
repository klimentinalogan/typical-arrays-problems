function max(numbers) {
    var max = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        if ( max < numbers[i]) max = numbers[i];
    }
    return max;
}

function min(numbers) {
    var min = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        if ( min > numbers[i]) min = numbers[i];
    }
    return min;
}

function avg (numbers) {
    sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum / numbers.length;
}

var numbers = [1, 2, 3, 4];
