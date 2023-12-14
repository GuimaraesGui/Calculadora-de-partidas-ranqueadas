//Calculadora de partidas ranqueadas
let wins = 15;
let defeat = 3;
let rank;
let saldo_de_rankeada;

function saldo_ranked(wins, defeat){
    saldo_de_rankeada = wins - defeat
    return saldo_de_rankeada
}

function elo(wins){
    if (wins > 10){
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

console.log("O Herói tem de saldo de " + saldo_ranked + " está no nível de " + elo);