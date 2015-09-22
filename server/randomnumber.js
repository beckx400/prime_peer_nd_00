/**
 * Created by Dave on 9/22/15.
 */
var getRandomInt =function () {
    var number =  Math.floor(Math.random() * ( 1000000 - 100 + 1)) + 100;
    number = parseInt(number);
    number = number.toString();
    console.log(number);
    return number;

}

module.exports = getRandomInt;