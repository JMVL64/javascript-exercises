var repeatString = function(stringInput, numberOfTimes) {
    var stringOutput = '';
    if (numberOfTimes < 0){
        return 'ERROR';
    } else if (numberOfTimes === 0){
        return stringOutput;
    } else {
        for (let x = 0; x < numberOfTimes; x++) {
            stringOutput += stringInput;
        }
        return stringOutput;
    }
}

module.exports = repeatString
