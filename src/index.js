exports.min = function min (array) {
    let min = array[0];
    if(numbers = []) return 0;
    for (i = 0; i < numbers.length; i++) {
        if ( min > numbers[i]) min = numbers[i];
    }
    return min;
    return 0;
}

exports.max = function max (array) {
    let max = array[0];
    if(numbers = []) return 0;
    for (i = 0; i < numbers.length; i++) {
        if ( max < numbers[i]) max = numbers[i];
    }
    return max;
    return 0;
}

exports.avg = function avg (array) {
    sum = 0;
    if(numbers = []) return 0;
    for (i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum / numbers.length;
    return 0;
}


