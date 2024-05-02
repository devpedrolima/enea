const questions = [
  "O que me faz feliz é:",
  "Essa é a minha essência e onde me sinto melhor:",
  "Estarei num bom caminho se:",
  "Eu gostaria que os outros me vissem como:",
  "Assim que eu lido com a rejeição:",
  "Assim que eu lido com os obstáculos e objeções:",
  "No processo de vendas eu gosto (lembre-se que todos somos vendedores de ideias, mesmo sem atuar no cargo de vendas):",
  "No processo de vendas eu não gosto: ",
  "Assim que eu trabalho em equipe:",
  "Assim que eu me sinto recebendo analises do lider:",
];

const alternatives = [
  /*Q1*/ [
    /*T1*/ "Ter tudo organizado e em ordem antes de me divertir para que não haja preocupações",
    /*T2*/ "Ver as pessoas que eu gosto felizes, principalmente se eu estiver participando.",
    /*T3*/ "Ser o campeão de tudo que participo.",
    /*T4*/ "Ser reconhecido por ser único, exclusivo ou diferente em algo.",
    /*T5*/ "Ser autossuficiente para tudo.",
    /*T6*/ "Tudo que foi planejado acontecer sem nenhum imprevisto.",
    /*T7*/ "Poder fazer coisas novas e experimentar novas experiencias.",
    /*T8*/ "Estar no comando das coisas.",
    /*T9*/ "Estar em paz comigo mesmo e com os outros.",
  ],

  /*Q2*/ [
    /*T1*/ "Ser justo, bom e equilibrado com todos a minha volta.",
    /*T2*/ "Ajudar as pessoas e sendo reconhecido por isso.",
    /*T3*/ "Buscar incansavelmente a vitória e ao sucesso.",
    /*T4*/ "Encontrar ou criar artes e coisas belíssimas inimagináveis.",
    /*T5*/ "Buscar o máximo de conhecimento possível para resolver as minhas demandas.",
    /*T6*/ "Criar plano B para tudo o que eu identificar como problema.",
    /*T7*/ "Colocar em prática várias ideias novas e criar soluções positivas.",
    /*T8*/ "Proteger os mais fracos que estão sob minha responsabilidade.",
    /*T9*/ "Manter a as coisas pacificas e sem problemas.",
  ],

  /*Q3*/ [
    /*T1*/ "Fizer o que é certo.",
    /*T2*/ "For amado pelos outros e estiver perto deles.",
    /*T3*/ "For bem sucedido e respeitado pelos outros.",
    /*T4*/ "Permanecer fiel a mim mesmo e minhas ideias.",
    /*T5*/ "Conseguir dominar algo através do conhecimento.",
    /*T6*/ "Eu fizer o que se espera que faça.",
    /*T7*/ "Eu obtiver o que preciso.",
    /*T8*/ "For forte e conseguir dominar as situações.",
    /*T9*/ "As pessoas que me rodeiam também estiverem.",
  ],

  /*Q4*/ [
    /*T1*/ "Uma pessoa justa, íntegra e incorruptível.",
    /*T2*/ "Um facilitador para chegar nas coisas que quer realizar.",
    /*T3*/ "Um vitorioso bem sucedido.",
    /*T4*/ "Único.",
    /*T5*/ "Especialista nos assuntos que trabalhos ou estudo.",
    /*T6*/ "Referência em segurança.",
    /*T7*/ "A pessoa mais criativa em superar desafios.",
    /*T8*/ "A pessoa mais forte.",
    /*T9*/ "Uma pessoa de boa.",
  ],

  /*Q5*/ [
    /*T1*/ "Fico com uma imensa raiva interna me cobrando onde foi que falhei.",
    /*T2*/ "Me irrito pela ingratidão e me excluo até melhorar meu humor.",
    /*T3*/ "Rejeição me da mais força para bater as minhas metas pessoais.",
    /*T4*/ "Rejeição é consumida como combustível para ideias mais fortes e criativas.",
    /*T5*/ "Não me faz sentir nada demais a rejeição.",
    /*T6*/ "Fico ansioso me questionando sobre onde eu falhei e no que eu tinha que ter feito para que isso não acontecesse.",
    /*T7*/ "Procuro desviar logo o pensamento da tristeza para algo de positivo.",
    /*T8*/ "Me recuo para um local protegido para que eu possa sofrer em silêncio e possa retornar mais forte do que antes.",
    /*T9*/ "Me pergunto porque isso aconteceu e se não tem como revertermos isso.",
  ],

  /*Q6*/ [
    /*T1*/ "Sigo todas as regras e resolvo pelo caminho correto, sem jeitinhos, por mais difícil que seja.",
    /*T2*/ "Dou meu jeito evitando pedir ajuda mesmo que eu não saiba como realizar a tarefa.",
    /*T3*/ "Estudo profundamente cada obstáculo para poder descobrir as falhas dele e o superar.",
    /*T4*/ "Procuro ajuda para passar pela situação caso eu não tenha conseguido desenvolver nenhuma estratégia extraordinária para vencer o obstáculo.",
    /*T5*/ "Estudo profundamente cada obstáculo para poder descobrir as falhas dele e o superar.",
    /*T6*/ "Crio planos e compartilho com as pessoas que se relacionam comigo. Se for algo que eu precise decidir sozinho, faço vários planos de reserva.",
    /*T7*/ "São oportunidades de pensar em soluções novas para atender a demanda ou atingir a meta.",
    /*T8*/ "Derroto cada obstáculo como uma fração da meta. Desafios e obstáculos só me deixam mais forte.",
    /*T9*/ "Obstáculos grandes demais podem me desanimar, mas com paciência tudo se resolve.",
  ],

  /*Q7*/ [
    /*T1*/ "De ser juiz ou arbitrar as fases da venda, sempre trazendo os benefícios e vantagens para o cliente comprar o produto certo.",
    /*T2*/ "De ser a pessoa que ajudou o cliente chegar na conclusão que ele precisa.",
    /*T3*/ "De ouvir muito para poder dar muita informação dos produtos ou serviços que vão atender esse cliente e convence-lo que ele precisa disso agora mesmo.",
    /*T4*/ "De entender o objetivo e a demanda do cliente para lhe apresentar a melhor e mais exclusiva opção possível.",
    /*T5*/ "De ter em mãos os manuais e memoriais descritivos necessários para suprir minhas dúvidas quando eu não tiver o conhecimento para atender o cliente.",
    /*T6*/ "De explicar tudo o máximo possível e de ter todas as respostas para as perguntas que me fizerem.",
    /*T7*/ "De encantar o cliente, fazer ele sonhar vivendo com o produto/serviço e até mesmo de mostrar pra ele como a vida dele daqui pra frente vai ser sem o produto/serviço",
    /*T8*/ "De comandar todas as etapas da venda até o fechamento.",
    /*T9*/ "Gosto de atender as necessidades do cliente, sem mais nem menos.",
  ],

  /*Q8*/ [
    /*T1*/ "Que outras pessoas fiquem interrompendo meus métodos ou se metendo na minha negociação, a não seja que eu tenha solicitado a presença do gerente ou gestor para essa finalidade.",
    /*T2*/ "Que o cliente saia da negociação insatisfeito comigo ou com a empresa.",
    /*T3*/ "Que o cliente fique inventando desculpas sem fundamentos só para trocar de assunto.",
    /*T4*/ "Que as pessoas fiquem se intrometendo enquanto estou criando soluções.",
    /*T5*/ "Que o cliente seja invasivo demais nas questões emocionais, afinal sou um prestador de serviços e não psicólogo.",
    /*T6*/ "De mentiras ou falácias tanto da parte do cliente para comigo quanto dos meus gestores para com os clientes só para fechar a venda",
    /*T7*/ "De que haja muita metodologia e arbitrariedade pra conduzir a venda. O processo tem que ser simples.",
    /*T8*/ "De demora. As coisas tem que fluir rapidamente.",
    /*T9*/ "De que as pessoas fiquem me apressando.",
  ],

  /*Q9*/ [
    /*T1*/ "Crio processos e regras para cada pessoa ter certa autonomia de forma geral e saber dos seus limites para não invadir o departamento ou atividade dos demais colegas.",
    /*T2*/ "Procuro estar sempre disponível para ajudar qualquer membro da equipe além das minhas responsabilidades.",
    /*T3*/ "Procuro agradar todos os colegas com minhas boas maneiras e minha obediência perante a liderança.",
    /*T4*/ "Costumo ser cooperativo com o objetivo ou com a necessidade do cliente buscando entregar a melhor qualidade possível, me importando pouco com a opinião de meus colegas.",
    /*T5*/ "Sou o mais quieto e analista da equipe falando com os outros somente se dirigirem a palavra a mim",
    /*T6*/ "Quero ser amigo e conquistar a confiança de todos, sejam dos meus colegas quanto do meu gestor, onde sempre vou estar disponível.",
    /*T7*/ "Tento contagiar os colegas com a minha energia e força de vontade.",
    /*T8*/ "Mostro que eu quem estou no comando das situações relacionadas a mim.",
    /*T9*/ "Estou disponível para ouvir a todos e fazer o que tem que ser feito sem estresse.",
  ],

  /*Q10*/ [
    /*T1*/ "Me sinto normal, afinal, é preciso mesmo usar ferramentas para medir resultados e poder tomar atitudes.",
    /*T2*/ "Não me leve a mal, mas eu prefiro lidar com pessoas e não com números e dados.",
    /*T3*/ "Gosto. A analise de dados nos permite a avaliar os indicadores para alcançar as metas baseado em melhorias dos pontos fracos.",
    /*T4*/ "Quanto mais indicadores, mais janelas para eu observar o que pode ser criado como soluções.",
    /*T5*/ "Somente através da analise de dados podemos mensurar racionalmente os números.",
    /*T6*/ "Me da ansiedade saber que posso ser julgado devido a estatísticas. Mas é interessante para julgar o desempenho dos outros.",
    /*T7*/ "É ótimo para poder dar ideia de novas possibilidades e maneiras de fazer diferente baseado em dados coletados.",
    /*T8*/ "Excelente. Com analise de dados é possível traçar várias estratégias.",
    /*T9*/ "Interessante como podemos mensurar tantas coisas apenas com ocorrências do passado.",
  ],
];

// Object to store points for each group
let groupPoints = {
  T1: [],
  T2: [],
  T3: [],
  T4: [],
  T5: [],
  T6: [],
  T7: [],
  T8: [],
  T9: [],
};

const QUESTIONS_THRESHOLD = 3; // Number of questions to check
const SCORE_THRESHOLD = 0; // Minimum score threshold

// Current question index
let currentQuestionIndex = 0;
let timerInterval;

// Function to shuffle an array
function shuffleArray(array) {
  const shuffledArray = array.slice(); // Create a copy of the original array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]]; // Swap elements
  }
  return shuffledArray;
}

// Function to display next question and alternatives
function displayQuestion() {
  document.getElementById("question").textContent =
    questions[currentQuestionIndex];

  // Randomize the order of alternatives
  const shuffledAlternatives = shuffleArray(alternatives[currentQuestionIndex]);

  let buttonsHTML = "";
  for (let i = 0; i < shuffledAlternatives.length; i++) {
    buttonsHTML += `<button class="button" onclick="selectAlternative('T${
      i + 1
    }')">${shuffledAlternatives[i]}</button>`;
  }
  document.getElementById("options").innerHTML = buttonsHTML;
  startTimer();
}

// Function to start the countdown timer
// Function to start the countdown timer
function startTimer() {
  let seconds;
  if (currentQuestionIndex === 4 || currentQuestionIndex === 5 || currentQuestionIndex === 6 || currentQuestionIndex === 7) {
    seconds = 120; // 120 seconds for questions 5, 6, 7, and 8
  } else {
    seconds = 60; // 60 seconds for the rest
  }
  document.getElementById(
    "timer"
  ).textContent = `Tempo Restante: ${seconds} seconds`;
  timerInterval = setInterval(() => {
    seconds--;
    document.getElementById(
      "timer"
    ).textContent = `Tempo Restante: ${seconds} seconds`;
    if (seconds <= 0) {
      clearInterval(timerInterval);
      selectAlternative("");
    }
  }, 1000);
}

// Function to select an alternative and update points
function selectAlternative(group) {
  clearInterval(timerInterval);
  if (group !== "") {
    groupPoints[group].push(
      alternatives[currentQuestionIndex][parseInt(group.substring(1)) - 1]
    );
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    // Hide the questionnaire and display the result
    document.getElementById("question").classList.add("hidden");
    document.getElementById("options").classList.add("hidden");
    document.getElementById("timer").classList.add("hidden");
    document.getElementById("result-container").classList.remove("hidden");
    showMostSelected();
  }
}

// Function to check if the user's score falls below the threshold
function checkScoreThreshold() {
  let totalScore = 0;
  for (let group in groupPoints) {
    totalScore += groupPoints[group].length;
  }
  return totalScore <= SCORE_THRESHOLD;
}

// Function to display the appropriate text based on the most selected and second most selected groups
function showMostSelected() {
  let mostSelected = findMostSelected();
  let resultText = "";

  if (mostSelected.length > 0) {
    resultText += `<br>  <br>`;
    resultText += `Seu perfil deve ser ${getGroupName(mostSelected[0])}<br>`;
    resultText += getGroupCharacteristics(mostSelected[0]);
  }

  if (mostSelected.length > 1) {
    resultText += `<br>  <br>`;
    resultText += `<br>Seu perfil também pode ser ${getGroupName(
      mostSelected[1]
    )}<br>`;

    resultText += getGroupCharacteristics(mostSelected[1]);
  }

  document.getElementById("result").innerHTML = resultText;
}
function getGroupCharacteristics(group) {
  switch (group) {
    case "T1":
    case "T8":
    case "T9":
      return "<h2 id='titulo_instintivo'>Instintivo</h2><p id='texto_instintivo'>Instintivos basicamente usam a ação como mentor de suas vidas. São pessoas determinadas, protetoras, não se deixam controlar facilmente e tendem mais a mandar do que a obedecer.</p><p>Clique aqui no botão para saber mais sobre o seu centro</p><button class='buttonfim' onclick=\"window.location.href='https://wa.me/5564992563627?text=Ol%C3%A1+Igor%21+estou+com+d%C3%BAvidas+no+teste+do+EneaBusiness'\">Saber mais</button>";
    case "T2":
    case "T3":
    case "T4":
      return "<h2>Emocional</h2><p>Emocionais basicamente têm as emoções como mentor de suas vidas. São pessoas sociáveis, comunicativas que criam relações com facilidade com o fim de serem notados, apreciados, admirados e queridos por todos que eles se relacionam.</p><p>Clique aqui no botão para saber mais sobre o seu centro</p><button class='buttonfim' onclick=\"window.location.href='https://wa.me/5564992563627?text=Ol%C3%A1+Igor%21+estou+com+d%C3%BAvidas+no+teste+do+EneaBusiness'\">Saber mais</button>";
    case "T5":
    case "T6":
    case "T7":
      return "<h2></h2>Mental</h2><p></p>Mentais basicamente usam a razão como mentor de suas vidas. São pessoas planejadoras, dedicam mais tempo em conhecer e calcular consequências no campo teórico do que a executá-las.</p><br><p>Clique aqui no botão para saber mais sobre o seu centro</p><button class='buttonfim' onclick=\"window.location.href='https://wa.me/5564992563627?text=Ol%C3%A1+Igor%21+estou+com+d%C3%BAvidas+no+teste+do+EneaBusiness'\">Saber mais</button>";
    default:
      return "Características do grupo desconhecido.<br>";
  }
}

// Função para obter o nome do grupo
function getGroupName(group) {
  switch (group) {
    case "T1":
      return "T1 - O ORGANIZADOR";
    case "T2":
      return "T2 - O SERVIDOR";
    case "T3":
      return "T3 - O REALIZADOR";
    case "T4":
      return "T4 - O ROMÂNTICO";
    case "T5":
      return "T5 - O OBSERVADOR";
    case "T6":
      return "T6 - O QUESTIONADOR";
    case "T7":
      return "T7 - O SONHADOR";
    case "T8":
      return "T8 - O CONFRONTADOR";
    case "T9":
      return "T9 - O INTERMEDIADOR";
    default:
      return "Grupo Desconhecido";
  }
}

// Function to find the two most selected groups
function findMostSelected() {
  let sortedGroups = Object.keys(groupPoints).sort(
    (a, b) => groupPoints[b].length - groupPoints[a].length
  );
  return sortedGroups.slice(0, 2);
}

// Start displaying the first question
displayQuestion();
