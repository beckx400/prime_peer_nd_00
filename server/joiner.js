/**
 * Created by Dave on 9/22/15.
 */
var getRandomInt = require("./randomnumber");
var toUSD = require("./usdconvert");

var joiner = function() {
    return toUSD(getRandomInt());
}
var simpleText = function(){
    console.log("Got HERE!");
    return "Account balance: \n"
}


exports.callJoiner = joiner;
exports.callSimpleText = simpleText;