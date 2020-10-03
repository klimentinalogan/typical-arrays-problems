exports.min = function min (array) {
    return 0;
}

exports.max = function max (array) {
    return 0;
}

exports.avg = function avg (array) {
    return 0;
}

function max(array) {
    var max = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        if ( max < numbers[i]) max = numbers[i];
    }
    return max;
    if(numbers = []) return 0;
}

function min(array) {
    var min = numbers[0];
    for (i = 0; i < numbers.length; i++) {
        if ( min > numbers[i]) min = numbers[i];
    }
    return min;
    if(numbers = []) return 0;
}

function avg(array) {
    sum = 0;
    for (i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum / numbers.length;
    if(numbers = []) return 0;
}

