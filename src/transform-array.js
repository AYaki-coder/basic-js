module.exports = function transform(arr) {
    if (Array.isArray(arr)) {
        // console.log(arr);
        // let newArr = [];

        // for (let i = 0; i < arr.length; i++) {

        //     if (arr[i] === '--double-next') {
        //         if (i !== arr.length - 1) {
        //             newArr.push(arr[i+1]);
        //             // newArr = [...newArr.slice(0, i), newArr[i + 1], ...newArr.slice(i + 1)];
        //         } else {
        //             // arr.splice(i, 1);
        //             // newArr.push(arr[i]);
        //         }
        //     } else if (arr[i] === '--double-prev') {
        //         if (i !== 0) {
        //             // newArr = [...newArr.slice(0, i), newArr[i - 1], ...newArr.slice(i + 1)];
        //             // arr.splice(i, 1, arr[i - 1]);
        //             newArr.push(arr[i-1]);
        //         } else {
        //             // newArr.splice(i, 1);
        //         }


        //     } else if (arr[i] === '--discard-next') {
        //         // if (i !== arr.length - 1) {
        //         //     newArr.splice(i, 2);
        //         //     i = i - 1;
        //         // } else {
        //         //     newArr.splice(i, 1);
        //         //     // i--;
        //         // }
        //         i+=1;
        //     } else if (arr[i] == '--discard-prev') {
        //         if (i !== 0) {
        //             // newArr.splice(i - 1, 2);
        //             // i = i - 2;
        //             newArr.pop();
        //         } else {
        //             // newArr.splice(i, 1);
        //             // i--;
        //         }
        //     } else {
        //         newArr.push(arr[i]);
        //     }
        // }

        // console.log(newArr);
        // return newArr;
        const CONTROLS = {
            '--discard-next': true,
            '--discard-prev': true,
            '--double-next': true,
            '--double-prev': true,
        }
        let myArr = arr.slice();
        for (let i = 0; i < myArr.length; i++) {
            if (myArr[i] in CONTROLS) {
                switch (myArr[i]) {
                    case '--double-prev':
                        if (i > 0) {
                            myArr[i] = myArr[i-1];
                        } else {
                            myArr[i] = null;
                        }
                        break;
                    case '--double-next':
                        if ((i+1) < myArr.length) {
                            myArr[i] = myArr[i+1];
                        } else {
                            myArr[i] = null;
                        }
                        break;
                    case '--discard-prev':
                        if (i > 0) {
                            myArr[i] = null;
                            myArr[i-1] = null;
                        } else {
                            myArr[i] = null;
                        }
                        break;
                    case '--discard-next':
                        if (i < (myArr.length - 1)) {
                            myArr[i] = null;
                            myArr[i+1] = null;
                        } else {
                            myArr[i] = null;
                        }
                        i++;
                        break;
                }
            } 
        }




        
        myArr = myArr.filter((el) => el !== null);
        return myArr;












    }
    throw Error;
};
