// 1️⃣ Desafio Classificador de nível de Herói

//**O Que deve ser utilizado**

//- Variáveis
//- Operadores
//- Laços de repetição
//- Estruturas de decisões

//## Objetivo

//Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

//Se XP for menor do que 1.000 = Ferro
//Se XP for entre 1.001 e 2.000 = Bronze
///Se XP for entre 2.001 e 5.000 = Prata
//Se XP for entre 6.001 e 7.000 = Ouro
//Se XP for entre 7.001 e 8.000 = Platina
//Se XP for entre 8.001 e 9.000 = Ascendente
//Se XP for entre 9.001 e 10.000= Imortal
//Se XP for maior ou igual a 10.001 = Radiante

//## Saída

//Ao final deve se exibir uma mensagem:
"O Herói de nome **{nome}** está no nível de **{nivel}**"

// Variáveis para armazenar o nome e a quantidade de experiência (XP) do herói
let herois = [
    { nome: "PANTERA NEGRA 😾", xp: 1500 },
    { nome: "Viúva Negra 🕷️", xp: 2000 },
    { nome: "HOMEM ARANHA 🕸️", xp: 3500 },
    { nome: "HOMEM FORMIGA 🐜", xp: 5698 },
    { nome: "HOMEN DE FERRO 🤖", xp: 10589 },
    { nome: "CAPITÃO AMERICA 🛡️", xp: 18590 },
    { nome: "THANOS 🧤", xp: 10000 }
];

for (let i = 0; i < herois.length; i++) {
    let xpHeroi = herois[i].xp;
    let nivelDoHeroi;

    if (xpHeroi <= 1000) {
        nivelDoHeroi = "FERRO ";
    } else if (xpHeroi <= 2000) {
        nivelDoHeroi = "BRONZE";
    } else if (xpHeroi <= 5000) {
        nivelDoHeroi = "PRATA";
    } else if (xpHeroi <= 7000) {
        nivelDoHeroi = "OURO";
    } else if (xpHeroi <= 8000) {
        nivelDoHeroi = "PLATINA";
    } else if (xpHeroi <= 9000) {
        nivelDoHeroi = "ASCENDENTE";
    } else if (xpHeroi <= 10000) {
        nivelDoHeroi = "IMORTAL";
    } else {
        nivelDoHeroi = "RADIANTE";
    }

    console.log("O Herói de nome " + herois[i].nome + " está no nível de " + herois[i].xp + " e está classificado como: " + nivelDoHeroi);
    
}