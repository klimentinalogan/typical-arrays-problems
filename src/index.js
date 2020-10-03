exports.min = function min (array) {
    return 0;
    let min = array[0];
    if(numbers = []) return 0;
    for (i = 0; i < numbers.length; i++) {
        if ( min > numbers[i]) min = numbers[i];
    }
    return min;
}

exports.max = function max (array) {
    return 0;
    let max = array[0];
    if(numbers = []) return 0;
    for (i = 0; i < numbers.length; i++) {
        if ( max < numbers[i]) max = numbers[i];
    }
    return max;
}

exports.avg = function avg (array) {
    return 0;
    sum = 0;
    if(numbers = []) return 0;
    for (i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum / numbers.length;
}


