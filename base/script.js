const questions = [
  "What's your favorite color?",
  "Which animal do you prefer?",
  "What's your favorite food?",
  "What's your favorite hobby?",
  "What's your favorite movie genre?",
  "What's your favorite season?",
  "What's your favorite sport?",
  "What's your favorite holiday destination?",
  "What's your favorite music genre?",
  "What's your favorite book genre?"
];

const alternatives = [
  ['Red', 'Blue', 'Green', 'Yellow', 'Orange', 'Purple', 'Pink', 'Black', 'White'],
  ['Dog', 'Cat', 'Bird', 'Fish', 'Rabbit', 'Horse', 'Lion', 'Tiger', 'Elephant'],
  ['Pizza', 'Burger', 'Sushi', 'Pasta', 'Salad', 'Steak', 'Soup', 'Sandwich', 'Tacos'],
  ['Reading', 'Cooking', 'Gardening', 'Painting', 'Playing an instrument', 'Sports', 'Watching movies', 'Traveling', 'Photography'],
  ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Romance', 'Adventure', 'Thriller', 'Documentary'],
  ['Spring', 'Summer', 'Autumn', 'Winter'],
  ['Football', 'Basketball', 'Tennis', 'Soccer', 'Baseball', 'Golf', 'Swimming', 'Volleyball', 'Hockey'],
  ['Beach', 'Mountain', 'City', 'Countryside', 'Historical sites', 'Theme parks', 'Ski resort', 'Cruise', 'Nature reserve'],
  ['Pop', 'Rock', 'Hip-hop', 'Jazz', 'Country', 'Electronic', 'Classical', 'Reggae', 'R&B'],
  ['Fiction', 'Non-fiction', 'Fantasy', 'Mystery', 'Romance', 'Science fiction', 'Thriller', 'Biography', 'Historical fiction']
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
  T9: []
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
  document.getElementById('question').textContent = questions[currentQuestionIndex];

  // Randomize the order of alternatives
  const shuffledAlternatives = shuffleArray(alternatives[currentQuestionIndex]);

  let buttonsHTML = '';
  for (let i = 0; i < shuffledAlternatives.length; i++) {
    buttonsHTML += `<button class="button" onclick="selectAlternative('T${i+1}')">${shuffledAlternatives[i]}</button>`;
  }
  document.getElementById('options').innerHTML = buttonsHTML;
  startTimer();
}

// Function to start the countdown timer
function startTimer() {
  let seconds = 60;
  document.getElementById('timer').textContent = `Time left: ${seconds} seconds`;
  timerInterval = setInterval(() => {
    seconds--;
    document.getElementById('timer').textContent = `Time left: ${seconds} seconds`;
    if (seconds <= 0) {
      clearInterval(timerInterval);
      selectAlternative('');
    }
  }, 1000);
}

// Function to select an alternative and update points
function selectAlternative(group) {
  clearInterval(timerInterval);
  if (group !== '') {
    groupPoints[group].push(alternatives[currentQuestionIndex][parseInt(group.substring(1)) - 1]);
  }
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    displayQuestion();
  } else {
    // Hide the questionnaire and display the result
    document.getElementById('question').classList.add('hidden');
    document.getElementById('options').classList.add('hidden');
    document.getElementById('timer').classList.add('hidden');
    document.getElementById('result-container').classList.remove('hidden');
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
  let resultText = '';

  if (mostSelected.length > 0) {
    resultText += `Text for ${mostSelected[0]}: This is the most selected group.`;
  }

  if (mostSelected.length > 1) {
    resultText += ` Text for ${mostSelected[1]}: This is the second most selected group.`;
  }

  document.getElementById('result').textContent = resultText;
}

// Function to find the two most selected groups
function findMostSelected() {
  let sortedGroups = Object.keys(groupPoints).sort((a, b) => groupPoints[b].length - groupPoints[a].length);
  return sortedGroups.slice(0, 2);
}

// Start displaying the first question
displayQuestion();