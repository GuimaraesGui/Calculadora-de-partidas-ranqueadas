//Calculadora de partidas ranqueadas
let wins = 10;
let defeat = 3;
let rank;
let brabo;

function win_rate(wins, defeat){
    return wins - defeat;
}

function elo(wins){
    if (wins <= 10){ //Se colocarmos somente como menor que 10, ele cairá no rak Imortal, por isso faz-se necessário o menor ou igual a 10.
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
    } else {
        rank = "Imortal"
    }

   return rank
}

console.log("O Herói tem de saldo de " + win_rate(wins, defeat) + " está no nível de " + elo(wins, rank));