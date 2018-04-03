var sum = require('./sum.js');
var jian = require('./jian.js');
var cheng = require('./cheng.js');
var chu = require('./chu.js');
module.exports = function (a,tag,b) {
    switch (tag){
        case "+":  return sum(a,b);
        break;
        case "-":  return jian(a,b);
        break;
        case "*":  return cheng(a,b);
        break;
        case "/":  return chu(a,b);
        break;
    }
}