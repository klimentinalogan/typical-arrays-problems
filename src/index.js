function max(numbers) {
    var max = numbers[0];
    if(numbers = []) return 0;
    for (i = 0; i < numbers.length; i++) {
        if ( max < numbers[i]) max = numbers[i];
    }
    return max;
    if(numbers = []) return 0;
}

function min(numbers) {
    var min = numbers[0];
    if(numbers = []) return 0;
    for (i = 0; i < numbers.length; i++) {
        if ( min > numbers[i]) min = numbers[i];
    }
    return min;
    if(numbers = []) return 0;
}

function avg (numbers) {
    sum = 0;
    if(numbers = []) return 0;
    for (i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum / numbers.length;
    if(numbers = []) return 0;
}


