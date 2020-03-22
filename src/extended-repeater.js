module.exports = function repeater(str, options) {

    let addstr = 'addition' in options ? ('' + options.addition) : '';
    let addnumber = 'additionRepeatTimes' in options ? options.additionRepeatTimes : 0;
    addnumber = addnumber == undefined ? 0 : addnumber;
    let addseparator = 'additionSeparator' in options ? options.additionSeparator : '|';

    let newaddStr = '';
    let addArr = [];

    str = '' + str;
    let number = 'repeatTimes' in options ? options.repeatTimes : 0;
    number = number == undefined ? 0 : number;
    let separator = 'separator' in options ? options.separator : '+';
    let newStr = [];

    while (addnumber > 0) {
        addArr.push(addstr);

        addnumber--
    }

    newaddStr = addArr.join(addseparator);

    while (number > 0) {
        newStr.push(str + newaddStr);
        number--
    }
   
    return newStr.join(separator) == "" ? str+addstr : newStr.join(separator);

};
