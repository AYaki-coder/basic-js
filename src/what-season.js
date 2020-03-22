module.exports = function getSeason(date) {
  if (date == undefined) {

    return 'Unable to determine the time of year!';
  }
  for (let property in date) {
    throw Error;
  }
  if (date.__proto__ !== Date.prototype) {

    throw Error;
  }

  let month = date.getMonth();
  if (month == 0 || month == 1 || month == 11) {

    return 'winter';
  }

  if (month > 1 && month < 5) {

    return 'spring';
  }
  if (month > 4 && month < 8) {

    return 'summer';
  }
  if (month > 7) {

    return 'autumn';
  }

};
