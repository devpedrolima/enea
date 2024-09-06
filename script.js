import data from './json/data.json' with { type: 'json' }


const questions = data.questions;
const profiles = data.profiles;
const characteristics = data.groupCharacteristcs;


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
let unansweredQuestions = 0;
let timerInterval;

// Function to shuffle an array using Fisher-Yates algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  
  return array;
}

// Function to display next question and alternatives
function displayQuestion() {
  if (
    typeof questions[currentQuestionIndex].statement === "undefined" ||
    typeof questions[currentQuestionIndex].alternatives === "undefined"
  ) {
    console.error("Questions or alternatives are not defined.");
    return;
  }

  // Write the Question Statement
  document.getElementById("question").textContent =
    questions[currentQuestionIndex].statement;

  // Create an array of alternatives with their respective groups
  const fixedAlternatives = questions[currentQuestionIndex].alternatives;

  // Shuffle the array of alternatives
  const shuffledAlternatives = shuffleArray(fixedAlternatives);
  

  // Generate the HTML for the shuffled buttons
  let buttonsHTML = "";
  for (let i = 0; i < shuffledAlternatives.length; i++) {
    buttonsHTML += `<button class="button" onclick="selectAlternative('${shuffledAlternatives[i].group}')">${shuffledAlternatives[i].text}</button>`;
  }
  document.getElementById("options").innerHTML = buttonsHTML;
  startTimer();
}

// Function to start the countdown timer
function startTimer() {
  let seconds;
  if (currentQuestionIndex >= 4 && currentQuestionIndex <= 7) {
    seconds = 120; // 120 seconds for questions 5, 6, 7, and 8
  } else {
    seconds = 60; // 60 seconds for the rest
  }
  document.getElementById(
    "timer"
  ).textContent = `Tempo Restante: ${seconds} segundos`;
  timerInterval = setInterval(() => {
    seconds--;
    document.getElementById(
      "timer"
    ).textContent = `Tempo Restante: ${seconds} segundos`;
    if (seconds <= 0) {
      clearInterval(timerInterval);
      selectAlternative("");
    }
  }, 1000);
}

// Function to select an alternative and update points
export function selectAlternative(group) {
  clearInterval(timerInterval);
  if (group !== "") {
    groupPoints[group].push(
      questions[currentQuestionIndex].alternatives[
        parseInt(group.substring(1)) - 1
      ]
    );
  } else {
    unansweredQuestions++;
    checkUnansweredQuestions();
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
    displayPieChart();
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

// Function to check if the unanswered questions exceed the threshold
function checkUnansweredQuestions() {
  if (unansweredQuestions >= QUESTIONS_THRESHOLD) {
    document.getElementById("overlay").style.display = "block";
    document.getElementById("reminder-popup").style.display = "block";
  }
}

// Function to display the appropriate text based on the most selected and second most selected groups
function showMostSelected() {
  let mostSelected = findMostSelected();
  let resultText = "";

  if (mostSelected.length > 0) {
    resultText = 
    `<br><br>
    <h3>Seu perfil pode ser</h3>
    <h1>${getGroupName(mostSelected[0])}<br> e ${getGroupName(
      mostSelected[1]
    )} </h1><br>
    <h2>Seus Centros do Enegrama</h2>
     ${getGroupCharacteristics(mostSelected[0])}
    <br>
     ${getGroupCharacteristics(mostSelected[1])}
    <br>
    <h2>Descrições do seu perfil</h2>
    <h1>${getGroupName(
      mostSelected[0]
    )} <br> e <br>${getGroupName(mostSelected[1])} </h1><br>
    ${getGroupCharacteristicsprofile(
      mostSelected[0]
    )}<br>${getGroupCharacteristicsprofile(mostSelected[1])}
    <br>`;
  }
  
  //comentei pq nao sei se vou usar ainda
  // if (mostSelected.length > 1) {
  //   resultText += `<br><br>`;
  //  resultText += `Seu perfil também pode ser ${getGroupName(mostSelected[1])}<br>`;
  //  resultText += getGroupCharacteristics(mostSelected[1]);
  // }

  document.getElementById("result").innerHTML = resultText;
}

//Function to get the characteristics of the Profile
function getGroupCharacteristicsprofile(group) {
  
  // Sets the profile caracteristics based on group
  const GROUP_PROFILES_DICTIONARY = {
    T1: profiles["T1"],
    T2: profiles["T2"],
    T3: profiles["T3"],
    T4: profiles["T4"],
    T5: profiles["T5"],
    T6: profiles["T6"],
    T7: profiles["T7"],
    T8: profiles["T8"],
    T9: profiles["T9"],
  };

  let groupProfiles = GROUP_PROFILES_DICTIONARY[group]

  // Create the list of characteristics
  let generalCharacteristicsList = ""
  groupProfiles.generalCharacteristics.map((characteristic) => {
    generalCharacteristicsList += `<li>${characteristic}</li>`
  })

  // Create the list of positive points
  let positivePointsList = ""
  groupProfiles.positivePoints.map((point) => {
    positivePointsList += `<li>${point}</li>`
  })

  // Create the list of negative points
  let negativePointsList = ""
  groupProfiles.negativePoints.map((point) => {
    negativePointsList += `<li>${point}</li>`
  })

  // return the html
      return `<div class='justified-text'>
<div class=${groupProfiles.cssClass}>
  <h1>${groupProfiles.title}</h1>
</div>

  <p>Baseado na estatística, o seu perfil PODE SER O ${groupProfiles.title}. Esse resultado pode ser comprovado com o uso das ferramentas e uma autoanalise mais profunda, que pode ser conseguida ao participar do eneaHARD, aqui no Instituto Fernando Antonio. Presumindo que você seja ${groupProfiles.title}, seguem algumas informações lembrando que, todos os perfis podem desenvolver habilidades humanas em qualquer área, o que vai mudar é a quantidade de energia usada.</p>

  <h2>Características Gerais</h2>
  
  <p>${generalCharacteristicsList}</p>
  

  <h2>Pontos Positivos</h2>
  <ul>
  ${positivePointsList}
  </ul>

  <h2>Pontos Negativos</h2>
  <ul>
  ${negativePointsList}
  </ul>

  <h2>Desejo Fundamental</h2>
  <p>${groupProfiles.fundamentalDesire}</p>

  <h2>Desequilíbrio dos Centros</h2>
  <p>${groupProfiles.centersImbalance}</p>

  <h2>Habilidades Naturais em Comunicação</h2>
  <p>${groupProfiles.naturalSkills.communication}</p>

  <h2>Habilidades Naturais em Vendas</h2>
  <p>${groupProfiles.naturalSkills.selling}</p>

  <h2>Habilidades Naturais em Liderança</h2>
  <p>${groupProfiles.naturalSkills.leadership}</p>

  <h2>Habilidades Naturais em Gestão</h2>
  <p>${groupProfiles.naturalSkills.management}</p>

  <h2>Talento Oculto</h2>
  <p>${groupProfiles.hiddenTalent}</p>

  <h2>Pontos de Melhoria</h2>
  <p>${groupProfiles.improvementPoints}</p>
</div>
`;
}
// Function to get the characteristics of the group
function getGroupCharacteristics(group) {

  const GROUP_CHARACTERISTICS_DICTIONARY = {
    T1: characteristics["institive"],
    T2: characteristics["emotional"],
    T3: characteristics["emotional"],
    T4: characteristics["emotional"],
    T5: characteristics["mental"],
    T6: characteristics["mental"],
    T7: characteristics["mental"],
    T8: characteristics["institive"],
    T9: characteristics["institive"],
  }

  let groupCharacteristics = GROUP_CHARACTERISTICS_DICTIONARY[group];

  // Create the list of positive points
  let positivePointsList = ""
  groupCharacteristics.positivePoints.map((point) => {
    positivePointsList += `<li>${point}</li>`
  })

  // Create the list of negative points
  let negativePointsList = ""
  groupCharacteristics.negativePoints.map((point) => {
    negativePointsList += `<li>${point}</li>`
  })

      return `
<div class=${groupCharacteristics.cssClass}>
  <h1>${groupCharacteristics.title}</h1>
</div>
<div class='justified-text'>
  <p>Lembre-se que nós estamos com dois centros ativos dos três centros. Logo você pode ser uma pessoa predominantemente ${groupCharacteristics.title}.</p>

  <h2>Características Gerais</h2>
  <p>${groupCharacteristics.generalCharacteristics}</p>

  <h2>Pontos positivos</h2>
  <ul>
  ${positivePointsList}
  </ul>

  <h2>Pontos negativos</h2>
  <ul>
  ${negativePointsList}
  </ul>

  <h2>Motivação básica</h2>
  <p>${groupCharacteristics.basicMotivation}</p>

  <h2>Habilidades naturais de comunicação</h2>
  <p>${groupCharacteristics.naturalSkills.communication}</p>
  
  <h2>Habilidades naturais em vendas</h2>
  <p>${groupCharacteristics.naturalSkills.selling}</p>
  
  <h2>Habilidades naturais em liderança</h2>
  <p>${groupCharacteristics.naturalSkills.leadership}</p>
  
  <h2>Habilidades naturais em gestão</h2>
  <p>${groupCharacteristics.naturalSkills.management}</p>

  <p>Clique aqui no botão para saber mais sobre o seu centro</p>
</div>
`;

}

// Function to get the name of the group
function getGroupName(group) {
  const GROUP_NAME_DICTIONARY = {
    T1: "T1 - O ORGANIZADOR",
    T2: "T2 - O SERVIDOR",
    T3: "T3 - O REALIZADOR",
    T4: "T4 - O ROMÂNTICO",
    T5: "T5 - O OBSERVADOR",
    T6: "T6 - O QUESTIONADOR",
    T7: "T7 - O SONHADOR",
    T8: "T8 - O CONFRONTADOR",
    T9: "T9 - O INTERMEDIADOR",
  }

  return GROUP_NAME_DICTIONARY[group] || "Grupo Desconhecido";
}


// Function to find the two most selected groups
function findMostSelected() {
  let sortedGroups = Object.keys(groupPoints).sort(
    (a, b) => groupPoints[b].length - groupPoints[a].length
  );
  return sortedGroups.slice(0, 2);
}
// Fuction to download HTML convert to PDF
document.addEventListener("DOMContentLoaded", function () {
  const downloadButton = document.getElementById("download-button");

  if (downloadButton) {
    downloadButton.addEventListener("click", function () {
      const element = document.getElementById("result-container");
      if (element) {
        const opt = {
          margin: 0.7,
          filename: "resultado_eneagrama.pdf",
          image: { type: "jpeg", quality: 0.99 },
          html2canvas: { scale: 1 },
          jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
        };
        html2pdf().set(opt).from(element).save();
      } else {
        console.error("Elemento result-container não encontrado.");
      }
    });
  } else {
    console.error("Botão download-button não encontrado.");
  }
});

// Function to display the doughnut chart
function displayPieChart() {
  const ctx = document.getElementById("choicesChart").getContext("2d");
  const data = {
    labels: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9"],
    datasets: [
      {
        data: Object.values(groupPoints).map((group) => group.length),
        backgroundColor: [
          "rgb(112, 48, 160)",
          "rgb(228, 108, 10)",
          "rgb(0, 112, 192)",
          "rgb(255, 192, 0)",
          "rgb(149, 55, 53)",
          "rgb(148, 138, 84)",
          "rgb(0, 176, 80)",
          "rgb(192, 0, 0)",
          "rgb(0, 0, 0)",
        ],
        borderColor: [
          "rgb(112, 48, 160)",
          "rgb(228, 108, 10)",
          "rgb(0, 112, 192)",
          "rgb(255, 192, 0)",
          "rgb(149, 55, 53)",
          "rgb(148, 138, 84)",
          "rgb(0, 176, 80)",
          "rgb(192, 0, 0)",
          "rgb(0, 0, 0)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "80%", // Define the size of the center hole as 50% of the chart's radius
    plugins: {
      legend: {
        position:  "bottom",
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            const groupLabel = data.labels[tooltipItem.dataIndex];
            const value = data.datasets[0].data[tooltipItem.dataIndex];
            return `${groupLabel}: ${value} escolhas`;
          },
        },
      },
    },
  };

  new Chart(ctx, {
    type: "doughnut", // Changed from "pie" to "doughnut"
    data: data,
    options: options,
  });
}


function reloadPage() {
  location.reload(true);
}


// Start displaying the first question
document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("start-test-button")
    .addEventListener("click", function () {
      document.getElementById("pre-teste-container").classList.add("hidden");
      document.getElementById("test-container").classList.remove("hidden");
      displayQuestion(); // Exibir primeira pergunta após iniciar o teste
    });
});

