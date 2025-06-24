const divstart = document.getElementById("diviniciar");
const divareajogo = document.getElementById("areajogo");
const titulo = document.getElementById("titulupergunta");
const btniniciar = document.getElementById("botaoiniciar");
const btnproximo = document.getElementById("buttonext");
const areapergunta = document.getElementById("areapergunta");
const pontuaçao = document.getElementById("pontuaçao"); // deve existir no HTML

const questions = [
  { question: "Qual é o maior deserto do mundo", optiones: ["Saara", "Antártida", "Atacama", "Andes"], correto: "Antártida" },
  { question: "Qual a pessoa mais rica do mundo", optiones: ["Bolsonaro", "Elon Musk", "Mark Zuckerberg", "Bill Gates"], correto: "Elon Musk" },
  { question: "Como comentar em C# (csharp)", optiones: ["#", "!", "/", "//"], correto: "//" },
  { question: "Qual o nome mais rápido", optiones: ["Koenigsegg Jesko Absolut", "Hennessey Venom F5v"], correto: "Koenigsegg Jesko Absolut" },
  { question: "Em que ano foi criado o JavaScript", optiones: ["2010", "2000", "1998", "1995"], correto: "1995" },
  { question: "Qual a melhor IA", optiones: ["Chatgpt", "Deepseeker", "Os que fazem videos IA do google la muito engraçado", "Gemini"], correto: "Os que fazem videos IA do google la muito engraçado"},
];

let indexperguntas = 0;
let points = 0;

btniniciar.addEventListener("click", começarjames);
btnproximo.addEventListener("click", prosscimaperguta);

function começarjames() {
  divstart.innerHTML = "";
  abrirareajogo();
}

function abrirareajogo() {
  divareajogo.classList.add("active");
  btnproximo.disabled = true;
  titulo.textContent = questions[indexperguntas].question;
  areapergunta.innerHTML = "";
  pontuaçao.innerHTML = ""; // da clear  na pontuaçao sempre quando clica em outra pergunta
  questions[indexperguntas].optiones.forEach(opcao => {
    const botao = document.createElement("button");
    botao.textContent = opcao;
    botao.classList.add("answer-btn");
    botao.addEventListener("click", () => validarresposta(opcao, botao));
    areapergunta.appendChild(botao);
  });
}

function validarresposta(respostaSelecionada, botaoClicado) {
  const botoes = document.querySelectorAll(".answer-btn");
  const correta = questions[indexperguntas].correto;

  botoes.forEach(botao => {
    if (botao.textContent === correta) {
      botao.classList.add("correct");
    }

    if (botao.textContent === respostaSelecionada && botao.textContent !== correta) {
      botao.classList.add("incorrect");
    }

    botao.disabled = true;
    botao.classList.add("disabled");
  });

//"funcao de pointsss"
  if (respostaSelecionada === correta) {
    points += 100;
    pontuaçao.innerHTML = " tu acerto +100 pts 👍";
  } else {
    points -= 25;
    if (points < 0) points = 0;
    pontuaçao.innerHTML = " vc perdeu -25 pts pq errou👎";
  }

  btnproximo.disabled = false;
}

function prosscimaperguta() {
  indexperguntas++;
  if (indexperguntas < questions.length) {
    abrirareajogo();
  } else {
    divareajogo.innerHTML = "<h2>Sua pontuaçao é: </h2>"+points;
    }
  }
