var sumAll = function(begin, end) {
    if (typeof begin != "number" || typeof end != "number" || begin < 0 || end < 0){
        return 'ERROR';
    }
    if (end < begin){
        let temp = 0;
        temp = begin;
        begin = end;
        end = temp;
    }
    sum = 0;
    for(let x = begin; x <= end; x++){
        sum += x;
    }
    return sum;
}

module.exports = sumAll
