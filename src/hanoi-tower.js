module.exports = function calculateHanoi(disksNumber, turnsSpeed) {

    let Result = {
        turns: 0,
        seconds: 0,

    };

    Result.turns = 2 ** disksNumber - 1;
    Result.seconds = Math.floor(Result.turns / (turnsSpeed / 3600));

    return Result;

}
