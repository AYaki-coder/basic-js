class VigenereCipheringMachine {
   
    constructor(typeOfMachine) {
        if(typeOfMachine == undefined || typeOfMachine == true){
            this.type = true;
        } else {

            this.type = false;
        }
        this.ABC = {
            A: 0,
            B: 1,
            C: 2,
            D: 3,
            E: 4,
            F: 5,
            G: 6,
            H: 7,
            I: 8,
            J: 9,
            K: 10,
            L: 11,
            M: 12,
            N: 13,
            O: 14,
            P: 15,
            Q: 16,
            R: 17,
            S: 18,
            T: 19,
            U: 20,
            V: 21,
            W: 22,
            X: 23,
            Y: 24,
            Z: 25,
        };

        this.decoderABC = {
            0:'A',
            1:'B',
            2:'C',
            3:'D',
            4:'E',
            5:'F',
            6:'G',
            7:'H',
            8:'I',
            9:'J',
            10:'K',
            11:'L',
            12:'M',
            13:'N',
            14:'O',
            15:'P',
            16:'Q',
            17:'R',
            18:'S',
            19:'T',
            20:'U',
            21:'V',
            22:'W',
            23:'X',
            24:'Y',
            25:'Z',
        };

        // console.log(this.ABC);
        // console.log(this.decoderABC)
      }
    encrypt(message, key) {
        if(message == undefined || key == undefined){
            throw Error;
        }
        message = message.toUpperCase();
        key = key.toUpperCase();
        let encryptedStr = [];
        let KEYcounter = 0;
        for (let i = 0; i < message.length; i++){
            if(message[i] in this.ABC){
                encryptedStr.push(this.decoderABC[(this.ABC[message[i]] + this.ABC[key[KEYcounter]]) % 26]);
                KEYcounter++;
                if( KEYcounter == key.length){
                    KEYcounter = 0; 
                }

            } else {
                encryptedStr.push(message[i]);

            }
        } 
        if( this.type == true){
           return encryptedStr.join('');
        }
        return encryptedStr.reverse().join('');
       
    }

    decrypt(encryptedMessage, key) {
        if(encryptedMessage == undefined || key == undefined){
            throw Error;
        }
        let message = encryptedMessage.toUpperCase();
        key = key.toUpperCase();
        let encryptedStr = [];
        let KEYcounter = 0;
        for (let i = 0; i < message.length; i++){
            if(message[i] in this.ABC){
                encryptedStr.push(this.decoderABC[(this.ABC[message[i]] + 26 - this.ABC[key[KEYcounter]]) % 26]);
                KEYcounter++;
                if( KEYcounter == key.length){
                    KEYcounter = 0; 
                }

            } else {
                encryptedStr.push(message[i]);

            }
        } 
        if( this.type == true){
           return encryptedStr.join('');
        }
        return encryptedStr.reverse().join('');
       
    }
}

module.exports = VigenereCipheringMachine;
