const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
    calculateDepth(array) {
        let maxInnerDepth = 0;
        array.forEach(element => {
            if (Array.isArray(element)) {
                let newMaxInnerDepth = this.calculateDepth(element);
                maxInnerDepth = maxInnerDepth > newMaxInnerDepth ? maxInnerDepth : newMaxInnerDepth;
            }

        });
        maxInnerDepth++;

        return maxInnerDepth;
    }
};