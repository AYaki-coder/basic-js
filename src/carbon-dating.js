const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity ) {

  if (sampleActivity == undefined || typeof(sampleActivity) !== 'string'){

    return false;
  }
  let sampleActivitynumber = parseFloat(sampleActivity);
  if ( sampleActivitynumber <= 0 || sampleActivitynumber >  MODERN_ACTIVITY || isNaN(sampleActivitynumber) ){

    return false;
  }

  let age = Math.ceil(Math.log( MODERN_ACTIVITY / sampleActivitynumber ) * HALF_LIFE_PERIOD / 0.693);
  return age;
};
