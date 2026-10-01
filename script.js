const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está alinhado na pista. A luz amarela do pinheirinho acendeu. O que você faz?",
        alternativas: [
            {
                texto: "Pressionar o acelerador ao máximo e largar com tudo.",
                afirmacao: "Você largou com agressividade máxima. ",
                proxima: 1
            },
            {
                texto: "Dosar o pé na embreagem para evitar que os pneus girem em falso.",
                afirmacao: "Sua largada foi perfeita e você manteve total controle da tração. ",
                proxima: 2
            }
        ]
    },
    {
        enunciado: "Você acelerou demais, os pneus fritaram no asfalto e o carro destracionou. O adversário colocou meio carro na frente. Como reagir?",
        alternativas: [
            {
                texto: "Fazer uma troca de marcha rápida e agressiva no limite do giro.",
                afirmacao: "O motor respondeu bem e você conseguiu emparelhar lado a lado. ",
                proxima: 3
            },
            {
                texto: "Injetar o Nitro imediatamente para compensar a perda de espaço.",
                afirmacao: "O excesso de potência com pouca aderência fez o carro rabejar na pista. ",
                proxima: 4
            }
        ]
    },
    {
        enunciado: "A tração foi perfeita. O carro agarrou no asfalto e disparou na frente. Você está na liderança nos primeiros 200 metros. Qual o próximo passo?",
        alternativas: [
            {
                texto: "Manter o foco total nas trocas de marcha e seguir em linha reta.",
                afirmacao: "Você manteve uma pilotagem cirúrgica e constante do início ao fim. ",
                proxima: 3
            },
            {
                texto: "Olhar pelo retrovisor para monitorar a aproximação do adversário.",
                afirmacao: "Sua hesitação momentânea deu espaço para o oponente se aproximar rápido. ",
                proxima: 4
            }
        ]
    },
    {
        enunciado: "Faltam apenas 100 metros para a linha de chegada e os carros estão disputando palmo a palmo. Qual sua decisão final?",
        alternativas: [
            {
                texto: "Engatar a última marcha no ponto perfeito de corte e manter o pé no fundo.",
                afirmacao: "O motor rendeu ao máximo e você cruzou a linha em primeiro lugar! [Final: Vitória Épica e Recorde da Pista]",
                proxima: null
            },
            {
                texto: "Tentar forçar a passagem para fechar a trajetória do adversário.",
                afirmacao: "O carro perdeu o ponto ideal de aceleração na reta final. [Final: Derrota por milésimos no último segundo]",
                proxima: null
            }
        ]
    },
    {
        enunciado: "O carro perdeu estabilidade e o adversário está prestes a ultrapassar. O que fazer para tentar salvar a corrida?",
        alternativas: [
            {
                texto: "Corrigir suavemente o volante e acionar o Nitro agora que os pneus agarraram no asfalto.",
                afirmacao: "A manobra foi precisa! O carro deu um salto de velocidade e retomou a ponta. [Final: Vitória com recuperação incrível]",
                proxima: null
            },
            {
                texto: "Tirar o pé do acelerador para evitar rodar na pista.",
                afirmacao: "Você evitou o acidente com segurança, mas o oponente cruzou a linha de chegada na frente. [Final: Derrota por segurança]",
                proxima: null
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual === null || atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas() {
    for (const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual = opcaoSelecionada.proxima;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Resultado da Corrida:";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();