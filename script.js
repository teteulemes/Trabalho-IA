const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado:
      "Você está alinhado na pista. A luz amarela do pinheirinho acendeu. O que você faz?",
    alternativas: [
      "Pressionar o acelerador ao máximo e largar com tudo.",
      "Dosar o pé na embreagem para evitar que os pneus girem em falso.",
    ],
  },
  {
    enunciado:
      "Você acelerou demais, os pneus fritaram no asfalto e o carro destracionou. O adversário colocou meio carro na frente. Como reagir?",
    alternativas: [
      "Fazer uma troca de marcha rápida e agressiva no limite do giro.",
      "Injetar o Nitro imediatamente para compensar a perda de espaço.",
    ],
  },
  {
    enunciado:
      "A tração foi perfeita. O carro agarrou no asfalto e disparou na frente. Você está na liderança nos primeiros 200 metros. Qual o próximo passo?",
    alternativas: [
      "Manter o foco total nas trocas de marcha e seguir em linha reta.",
      "Olhar pelo retrovisor para monitorar a aproximação do adversário.",
    ],
  },
  {
    enunciado:
      "Se você escolheu o Caminho A (Largar com tudo), qual foi o desfecho da sua manobra?",
    alternativas: [
      "Troca rápida: O motor respondeu bem, você recuperou a diferença e cruzou a linha lado a lado. [Vitória por milésimos]",
      "Nitro imediato: O excesso de potência com pouca aderência fez o carro rabejar. Você teve que tirar o pé. [Derrota por segurança]",
    ],
  },
  {
    enunciado:
      "Se você escolheu o Caminho B (Dosar a embreagem), qual foi o desfecho da sua manobra?",
    alternativas: [
      "Foco e precisão: Trocas perfeitas do início ao fim. O carro cruzou a linha no tempo limite da categoria. [Vitória e recorde da pista]",
      "Olhar o retrovisor: Você perdeu o tempo exato da troca de marcha ao se distrair. O oponente passou no último segundo. [Derrota na linha de chegada]",
    ],
  },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();