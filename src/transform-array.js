module.exports = function transform(arr) {
    if (Array.isArray(arr)) {

        for (let i = 0; i < arr.length; i++) {

            if (arr[i] == '--double-next') {
                if (i !== arr.length - 1) {
                    arr.splice(i, 1, arr[i + 1]);
                } else {
                    arr.splice(i, 1);
                }
            }

            if (arr[i] == '--double-prev') {
                if (i !== 0) {
                    arr.splice(i, 1, arr[i - 1]);
                } else {
                    arr.splice(i, 1);
                }


            }
        }

        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == '--discard-next') {
                if (i !== arr.length - 1) {
                    arr.splice(i, 2);
                    i = i -2;
                } else {
                    arr.splice(i, 1);
                    i--;
                }
            }

            if (arr[i] == '--discard-prev') {
                if (i !== 0) {
                    arr.splice(i - 1, 2);
                    i = i -2;
                } else {
                    arr.splice(i, 1);
                    i--;
                }


            }
        }
        return arr;
    }
  throw Error;
};
