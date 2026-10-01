// Seleção dos elementos do DOM
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

// Estrutura de dados com ramificação de escolhas (árvore de decisão)
const perguntas = [
  {
    enunciado: "Você está alinhado na pista. A luz amarela do pinheirinho acendeu. O que você faz?",
    alternativas: [
      {
        texto: "Pressionar o acelerador ao máximo e largar com tudo.",
        afirmacao: "Você largou com agressividade máxima.",
        proxima: 1
      },
      {
        texto: "Dosar o pé na embreagem para evitar que os pneus girem em falso.",
        afirmacao: "Sua largada foi perfeita e você manteve total controle da tração.",
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

// Estado do jogo
let atual = 0;
let historiaFinal = "";

function iniciarJogo() {
  atual = 0;
  historiaFinal = "";
  if (caixaResultado) caixaResultado.style.display = "none";
  if (textoResultado) textoResultado.textContent = "";
  mostraPergunta();
}

function mostraPergunta() {
  if (atual === null || atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  const perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.replaceChildren(); // Limpa as alternativas anteriores de forma eficiente

  mostraAlternativas(perguntaAtual.alternativas);
}

function mostraAlternativas(alternativas) {
  alternativas.forEach((alternativa) => {
    const botao = document.createElement("button");
    botao.textContent = alternativa.texto;
    botao.classList.add("btn-resposta");
    botao.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botao);
  });
}

function respostaSelecionada(opcaoSelecionada) {
  historiaFinal += `${opcaoSelecionada.afirmacao} `;
  atual = opcaoSelecionada.proxima;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Resultado da Corrida:";
  caixaAlternativas.replaceChildren();

  if (textoResultado) {
    textoResultado.textContent = historiaFinal.trim();
  }
  
  if (caixaResultado) {
    caixaResultado.style.display = "block";
  }

  // Criar botão para reiniciar a corrida
  const btnReiniciar = document.createElement("button");
  btnReiniciar.textContent = "Jogar Novamente";
  btnReiniciar.classList.add("btn-reiniciar");
  btnReiniciar.addEventListener("click", iniciarJogo);
  caixaAlternativas.appendChild(btnReiniciar);
}

// Inicializa a aplicação
iniciarJogo();