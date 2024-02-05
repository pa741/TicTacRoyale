

// O is AI
String.prototype.count = function (c) {
    var result = 0, i = 0;
    for (i; i < this.length; i++)if (this[i] == c) result++;
    return result;
};

function SumRowPoints(row, board) {

    var sum = 0;
    let r = ""


    for (var i = 0; i < row.length; i++) {

        let val = board[row[i]] ?? "";
        var c = r.count(val);

        if (val != "" && r != "") {

            let length = r.length;
            if (c !== length) {
                return 0;

            // si ya existe un simbolo contando con esta iteracion se va a poder cumplir tres en raya el siguiente turno
            } else if (c > 0) {

                //Priorizamos nuestra victoria
                if (val == "O") {
                    sum += 100;
                }
                //Evitamos nuestra derrota
                if (val == "X") {
                    sum += 50;
                }

            }
        }
        r += val;
        switch (val) {
            case "O":
                sum += 4;
                break;
            case "X":
                sum += 2;
                break;
            default:
                sum += 1;
                break;
        }
    }
    return sum;
}


function SpaceInBoard(board){
    console.log("SpaceInBoard");
    console.log(board);
    let flag = false;
    board.forEach(square => {
        
        console.log(square);
        if(square == "" ||square == undefined ||square == '' ){
            flag = true;
        }

    });
    return flag;
    
}


function CalculateMove(board) {

    if(!SpaceInBoard(board))
    {
        console.log("No hay espacio en el tablero");
        return -1;
    }

    var rows = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    var scores = [0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (var i = 0; i < rows.length; i++) {
        let row = rows[i];
        let score = SumRowPoints(row, board);
        for (var j = 0; j < row.length; j++) {
            if (board[row[j]] === "" || board[row[j]] === undefined)
                scores[row[j]] += score;
            else{
                scores[row[j]] = -1;
            }
        }
    }
    var max = -1000;
    var maxIndex = 0;
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] > max) {
            max = scores[i];
            maxIndex = i;
        }
    }
    return maxIndex;
}


module.exports = CalculateMove;