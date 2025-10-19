console.clear();
const prompt = require('prompt-sync')();
//Variável de inicio
let repete = 'sim';
//laço de reinicio
while (repete == 's' || repete == 'sim') {

console.log('================SIMULADOR DE ROTINA================');

//Variáveis de estado e tempo
let energia = {
    inicial: 100,
    perda: 20,
    ganho: 15
};
let inteligencia = {
    inicial: 10,
    perda: 10,
    ganho: 10
};
let dinheiro = {
    inicial: 20,
    perda: 10,
    ganho: 10
};
let tempo = {
    inicial: 24,
    perda: 8,
    ganho: 8
};
let diasDoMes = [
    1, 2, 3, 4, 5,
    6, 7, 8, 9, 10,
    11, 12, 13, 14
];
let diasDaSemana = [
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
    'Domingo',
    'Segunda-Feira',
    'Terça-Feira',
    'Quarta-Feira',
    'Quinta-Feira',
    'Sexta-Feira',
    'Sábado',
    'Domingo'
];
let periodo = ['Manhã', 'Tarde', 'Noite'];

let saudacao = ['Bom Dia!', 'Boa Tarde!', 'Boa Noite!'];

//Variáveis de escolha

const escolhas = [`Você encontrou um bug no sistema de uma empresa.
Deseja informar o erro a empresa?`,
    'Você encontrou um curso com boas recomendações. Deseja adquiri-lo?',
    'Você sonhou com números da loteria. Deseja joga-los?'];



    //Apresentação do jogo
    console.log(
        `Este jogo tem o proposito de simular de maneira simples um rotina.
    O jogo se encerra quando se alcança o estado [100] em inteligência ou em dinheiro
    sem zerar nenhum outro estado. `
    )
    const ent = prompt(`
    >>>>Pressione ENTER para continuar!`);
    console.clear();

    let nome = prompt('Para começar, qual é o seu nome?  ');
    console.log();
    console.log(`>>>Bem-vindo(a) ${nome}.`);
    console.log();
    console.log(`
    -->Cada ação tem um custo e um beneficio:
    ->[1]-Trabalhar: {+10 DINHEIRO},{-8 TEMPO},{-10 ENERGIA}
    ->[2]-Estudar: {+10 INTELIGENCIA},{-8 TEMPO},{-10 ENERGIA}
    ->[3]-Vagabundar: {+10 ENERGIA},{-8 TEMPO},{-10 DINHEIRO}
    ->[4]-Dormir:{+8 TEMPO},{+15 ENERGIA}
    ATENÇÃO AO CUSTO DE CADA AÇÃO E CUIDADO PARA NÃO ZERAR NENHUM ESTADO!`)
    console.log();
    const ente = prompt(`>>>>Pressione ENTER para continuar!`);
    console.clear();
    //Inicio dos laços de tempo
    laco: for (var m = 0, i = 0; m < diasDoMes.length, i < diasDaSemana.length; m++, i++) {

        
        //Laço de Periodos do dia
        for (var s = 0, d = 0; s < saudacao.length, d < periodo.length; s++, d++) 
        {
            //Condições para derrota no jogo
            if (tempo.inicial <= 0) {
                console.log(`VOCÊ FICOU SEM TEMPO. VOCÊ PERDEU! `);
                break laco;
            }
            if (dinheiro.inicial <= 0) {
                console.log(`VOCÊ FICOU SEM DINHEIRO. VOCÊ PERDEU! `);
                break laco;
            }
    
            if (energia.inicial <= 0) {
                console.log(`VOCÊ FICOU SEM ENERGIA. VOCÊ PERDEU! `);
                break laco;
            }
            if (inteligencia.inicial <= 0) {
                console.log(`VOCÊ FICOU SEM INTELIGÊNCIA. VOCÊ PERDEU! `);
                break laco;
            }

            //Expressões para escolha aleatória
            let tudo = Math.round(Math.random() * 3) + 1
            let comp = Math.round(Math.random() * 3) + 1
            let comp2 = Math.round(Math.random() * 3) + 1
            //Funçoes de perda e ganha de estados
            function perdeEnergia(energiaTotal, energiaPerdida) {
                energiaTotal = energiaTotal - energiaPerdida;
                console.log(`===================Você gastou (-${energiaPerdida}) de Energia.
                Sua Energia atual é :${energiaTotal}`);
                console.log()
                return energiaTotal
            }
            function ganhaEnergia(energiaTotal, energiaGanha) {
                energiaTotal = energiaTotal + energiaGanha;
                console.log(`===================Você ganhou (+${energiaGanha}) de Energia.
                Sua Energia atual é :${energiaTotal}`);
                console.log()
                return energiaTotal
            }
            function perdeInteligencia(inteligenciaTotal, inteligenciaPerdida) {
                inteligenciaTotal = inteligenciaTotal - inteligenciaPerdida;
                console.log(`===================Você perdeu (-${inteligenciaPerdida}) de Inteligência.
                Sua Inteligência atual é :${inteligenciaTotal}`);
                console.log()
                return inteligenciaTotal
            }
            function ganhaInteligencia(inteligenciaTotal, inteligenciaGanha) {
                inteligenciaTotal = inteligenciaTotal + inteligenciaGanha;
                console.log(`===================Você ganhou (+${inteligenciaGanha}) de Inteligência.
                Sua Inteligência atual é :${inteligenciaTotal}`);
                console.log()
                return inteligenciaTotal
            }
            function perdeDinheiro(dinheiroTotal, dinheiroPerdido) {
                dinheiroTotal = dinheiroTotal - dinheiroPerdido;
                console.log(`===================Você gastou (-${dinheiroPerdido}) de Dinheiro.
                Seu Dinheiro atual é :${dinheiroTotal}`);
                console.log()
                return dinheiroTotal
            }
            function ganhaDinheiro(dinheiroTotal, dinheiroGanho) {
                dinheiroTotal = dinheiroTotal + dinheiroGanho;
                console.log(`===================Você ganhou (+${dinheiroGanho}) de Dinheiro.
                Dinheiro atual :${dinheiroTotal}`);
                console.log()
                return dinheiroTotal
            }
            function perdeTempo(tempoTotal, tempoPerdido) {
                tempoTotal = tempoTotal - tempoPerdido;
                console.log(`===================Você usou (-${tempoPerdido}) horas do seu tempo.
                Tempo atual :${tempoTotal}`);
                console.log()
                return tempoTotal
            }
            function dormir(tempoTotal, tempoGanho) {
                tempoTotal = tempoTotal + tempoGanho;
                console.log(`===================Você dormiu.
                Restaurando as horas :${tempoTotal}`);
                console.log()
                return tempoTotal
            }
            
                console.log(`
=======================================================
${saudacao[s]} ${nome},  ${diasDaSemana[i]}, Dia: ${diasDoMes[m]}
===================${periodo[d]} ====================== 
           
        SEUS ESTADOS ATUAIS SÃO:
HORAS DISPONÍVEIS :${tempo.inicial} HORAS
ENERGIA:${energia.inicial}
INTELIGENCIA:${inteligencia.inicial}
DINHEIRO:${dinheiro.inicial}
=======================================================`)
            
            //Apresentação das escolhas disponíveis
            let escolha1 = +prompt('O que você deseja fazer?[1]-trabalhar,[2]-estudar,[3]-vagabundar,[4]-dormir?  ')
            while (escolha1 != 1 && escolha1 != 2 && escolha1 != 3 && escolha1 != 4) {
                console.log('===================Insira uma opção valida!')
                escolha1 = +prompt('O que você deseja fazer?[1]-trabalhar,[2]-estudar,[3]-vagabundar,[4]-dormir?  ')
            }
            console.log('=======================================================')
            if (escolha1 === 1) {
                console.log('===================Você foi trabalhar.')
                tempo.inicial = perdeTempo(tempo.inicial, tempo.perda)
                dinheiro.inicial = ganhaDinheiro(dinheiro.inicial, dinheiro.ganho)
                energia.inicial = perdeEnergia(energia.inicial, 10)
            }
            else if (escolha1 === 2) {
                console.log('===================Você foi estudar.')
                tempo.inicial = perdeTempo(tempo.inicial, tempo.perda)
                energia.inicial = perdeEnergia(energia.inicial, 10)
                inteligencia.inicial = ganhaInteligencia(inteligencia.inicial, inteligencia.ganho)
            }
            else if (escolha1 === 3) {
                console.log('===================Você resolveu vagabundar.')
                tempo.inicial = perdeTempo(tempo.inicial, tempo.perda)
                energia.inicial = ganhaEnergia(energia.inicial, 10)
                dinheiro.inicial = perdeDinheiro(dinheiro.inicial, dinheiro.perda)
            }
            else if (escolha1 === 4 && tempo.inicial > 16) {
                console.log(`===================Você tentou dormir,
                porém estava sem sono, só perdeu tempo.`)
                tempo.inicial = perdeTempo(tempo.inicial, tempo.perda)
            }
            else if (escolha1 === 4 && tempo.inicial <= 16) {
                console.log('===================Você escolheu ir dormir.')
                tempo.inicial = dormir(tempo.inicial, tempo.ganho)
                energia.inicial = ganhaEnergia(energia.inicial, energia.ganho)
            }
            //Escolhas opcionais aleatórias
            if (tudo === 1) {
                if (comp === 1) {
                    console.log()
                    console.log(`===================ESCOLHA ALEATÓRIA `)
                    console.log(escolhas[0])
                    console.log()
                    let e1 = +prompt('===================Escolha [1] pra sim [2] pra não: ')
                    while (e1 != 1 && e1 != 2) {
                        console.log('===================Insira uma opção valida!')
                        e1 = +prompt('===================Escolha [1] pra sim [2] pra não:   ')
                    }
                    console.log()
                    if (e1 == 1) {
                        if (comp2 == 1) {
                            console.log(`===================Você informou a empresa, que te agradeceu com uma recompensa.`)
                            dinheiro.inicial = ganhaDinheiro(dinheiro.inicial, dinheiro.ganho)
                        }
                        else if (comp2 == 2) {
                            console.log(`===================Você informou a empresa que agradeceu apenas.`)
                        }
                        else if (comp2 == 3) {
                            console.log(`===================A empresa está te processando por invasão. `)
                            dinheiro.inicial = perdeDinheiro(dinheiro.inicial, dinheiro.perda)
                        }
                    }
                    else if (e1 == 2) {
                        console.log('===================Você resolve não se intrometer.')
                        console.log()
                    }
                }

                if (comp === 2) {
                    console.log()
                    console.log(`===================ESCOLHA ALEATÓRIA`)
                    console.log(escolhas[1])
                    console.log()
                    let e2 = +prompt('===================Escolha [1] pra sim [2] pra não: ')
                    while (e2 != 1 && e2 != 2) {
                        console.log('===================Insira uma opção valida!')
                        e2 = +prompt('===================Escolha [1] pra sim [2] pra não:   ')
                    }
                    console.log()
                    if (e2 == 1) {
                        if (comp2 == 1) {
                            console.log(`===================Você compra o curso e tira muito proveito das informações obtidas.`)
                            inteligencia.inicial = ganhaInteligencia(inteligencia.inicial, inteligencia.ganho)
                        }
                        else if (comp2 == 2) {
                            console.log(`===================Você compra o curso e percebe que ele é bem mediano.`)
                        }
                        else if (comp2 == 3) {
                            console.log(`===================Após a compra você percebe que caiu num golpe.`)
                            inteligencia.inicial = perdeInteligencia(inteligencia.inicial, inteligencia.perda)
                        }
                    }
                    else if (e2 == 2) {
                        console.log('===================Você resolve não comprar.')
                        console.log()
                    }
                }
                if (comp === 3) {
                    console.log()
                    console.log(`________ESCOLHA ALEATÓRIA________`)
                    console.log(escolhas[2])
                    console.log()
                    let e3 = +prompt('Escolha [1] pra sim [2] pra não: ')
                    while (e3 != 1 && e3 != 2) {
                        console.log('Insira uma opção valida!')
                        e3 = +prompt('Escolha [1] pra sim [2] pra não:   ')
                    }
                    console.log()
                    if (e3 == 1) {
                        if (comp2 == 1) {
                            console.log(`Você joga os números e acerta vários deles.`)
                            dinheiro.inicial = ganhaDinheiro(dinheiro.inicial, dinheiro.ganho)
                        }

                        else if (comp2 == 2) {
                            console.log(`Você joga os números e ganha só o suficiente pra pagar o bilhete.`)
                        }
                        else if (comp2 == 3) {
                            console.log(`Você acerta um número e não ganha nada.`)
                            dinheiro.inicial = perdeDinheiro(dinheiro.inicial, dinheiro.perda)
                        }
                    }
                    else if (e3 == 2) {
                        console.log('Você resolve não jogar.')
                        console.log()
                    }
                }

            }

        } 
         //Condições para vencer o jogo
        if (dinheiro.inicial >= 100) {
            console.log(`
            VOCÊ CONSEGUIU ACUMULAR  [100] DINHEIRO! 
            VOCÊ VENCEU! PARABÉNS!! `);
            break laco;
        }
        else if (inteligencia.inicial >= 100) {
            console.log('VOCÊ CONSEGUIU ACUMULAR  [100] INTELIGÊNCIA! VOCÊ VENCEU! PARABÉNS ');
            break laco;
        }
    }
    //Laço de reinicio   
    do {
        console.log()
        repete = prompt('<<<<((SIM))<<<<<<<< COMEÇAR NOVAMENTE ? >>>>>>>>((NÃO))>>>>').toLowerCase();
        console.clear();
    }
    while (repete != 's' && repete != 'sim' &&
    repete != 'n' && repete != 'nao');
    // Encerramento do jogo
    if (repete == 'n' || repete == 'nao') {
        console.log('----------(((FIM DA SIMULAÇÃO))----------');
    }
}