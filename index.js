//Calculadora de partidas ranqueadas
let wins;
let defeat;

wins = 109
defeat = 7
function win_rate(wins, defeat){
    return wins - defeat;
}

function elo(wins){
    if (wins < 10){
        rank = "Ferro"
        } else if (wins > 11 && wins < 20){
            rank = "Bronze"
        } else if (wins > 21 && wins < 50){
            rank = "Prata"
        } else if (wins > 51 && wins < 80){
            rank = "Ouro"
        } else if (wins > 81 && wins < 90){
            rank = "Diamante"
        } else if (wins > 91 && wins < 100){
            rank = "Lendário"
        } else{
            rank = "Imortal"
        }

    return rank
}

console.log("O Herói tem de saldo de " + win_rate(55, 3) + " está no nível de " + elo(wins));