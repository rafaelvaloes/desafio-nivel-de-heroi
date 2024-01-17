
//Variaveis
let nomeHeroi = "Raffildzs"
let xpHeroi = "10001"
let nivelHeroi = ""

//Laço de Repetição com If
if (xpHeroi <= 1000) {
    nivelHeroi = "Ferro"
    console.log("O heroi " + nomeHeroi + " está no nivel " + nivelHeroi + ("."))
} else if ((xpHeroi > 1000) && (xpHeroi <= 2000)) {
    nivelHeroi = "Bronze"
    console.log("O heroi " + nomeHeroi + " está no nivel " + nivelHeroi + ("."))
} else if ((xpHeroi > 2000) && (xpHeroi <= 5000)) {
    nivelHeroi = "Prata"
    console.log("O heroi " + nomeHeroi + " está no nivel " + nivelHeroi + ("."))
} else if ((xpHeroi > 5000) && (xpHeroi <= 7000)) {
    nivelHeroi = "Ouro"
    console.log("O heroi " + nomeHeroi + " está no nivel " + nivelHeroi + ("."))
} else if ((xpHeroi > 7000) && (xpHeroi <= 8000)) {
    nivelHeroi = "Platina"
    console.log("O heroi " + nomeHeroi + " está no nivel " + nivelHeroi + ("."))
} else if ((xpHeroi > 8000) && (xpHeroi <= 9000)) {
    nivelHeroi = "Ascendente"
    console.log("O heroi " + nomeHeroi + " está no nivel " + nivelHeroi + ("."))
} else if ((xpHeroi > 9000) && (xpHeroi <= 10000)) {
    nivelHeroi = "Imortal"
    console.log("O heroi " + nomeHeroi + " está no nivel " + nivelHeroi + ("."))
} else if (xpHeroi > 10000) {
    nivelHeroi = "Radiante"
    console.log("O heroi " + nomeHeroi + " está no nivel " + nivelHeroi + ("."))
} else{
    console.log("Valor Invalido")
}