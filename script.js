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
                afirmacao: "O motor respondeu bem, você recuperou a diferença e cruzou a linha lado a lado. [Vitória por milésimos]",
                proxima: null
            },
            {
                texto: "Injetar o Nitro imediatamente para compensar a perda de espaço.",
                afirmacao: "O excesso de potência com pouca aderência fez o carro rabejar. Você teve que tirar o pé. [Derrota por segurança]",
                proxima: null
            }
        ]
    },
    {
        enunciado: "A tração foi perfeita. O carro agarrou no asfalto e disparou na frente. Você está na liderança nos primeiros 200 metros. Qual o próximo passo?",
        alternativas: [
            {
                texto: "Manter o foco total nas trocas de marcha e seguir em linha reta.",
                afirmacao: "Trocas perfeitas do início ao fim. O carro cruzou a linha no tempo limite da categoria. [Vitória e recorde da pista]",
                proxima: null
            },
            {
                texto: "Olhar pelo retrovisor para monitorar a aproximação do adversário.",
                afirmacao: "Você perdeu o tempo exato da troca de marcha ao se distrair. O oponente passou no último segundo. [Derrota na linha de chegada]",
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