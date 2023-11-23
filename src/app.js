const daily = document.getElementById('daily_select');

daily.addEventListener('click', () => {
  // Atualiza os elementos da div Work
  workCurrentTime.textContent = '5hrs';
  workPreviusTime.textContent = 'Last Day - 7hrs';

  // Atualiza os elementos da div Play
  playCurrentTime.textContent = '1hr';
  playPreviusTime.textContent = 'Last Day - 2hrs';

  // Atualiza os elementos da div Study
  studyCurrentTime.textContent = '0hrs';
  studyPreviusTime.textContent = 'Last Day- 1hr';

  // Atualiza os elementos da div Exercise
  exerciseCurrentTime.textContent = '1hr';
  exercisePreviusTime.textContent = 'Last Day - 1hr';

  // Atualiza os elementos da div Social
  socialCurrentTime.textContent = '1hr';
  socialPreviusTime.textContent = 'Last Day - 3hrs';

  // Atualiza os elementos da div Self Care
  selfCareCurrentTime.textContent = '0hrs';
  selfCarePreviusTime.textContent = 'Last Day - 1hr';
});



const weekly = document.getElementById('weekly_select');

// Elementos da div Work
const workCurrentTime = document.getElementById('work_current_time');
const workPreviusTime = document.getElementById('work_previous_time');

// Elementos da div Play
const playCurrentTime = document.getElementById('play_current_time');
const playPreviusTime = document.getElementById('play_previous_time');

// Elementos da div Study
const studyCurrentTime = document.getElementById('study_current_time');
const studyPreviusTime = document.getElementById('study_previous_time');

// Elementos da div Exercise
const exerciseCurrentTime = document.getElementById('exercise_current_time');
const exercisePreviusTime = document.getElementById('exercise_previous_time');

// Elementos da div Social
const socialCurrentTime = document.getElementById('social_current_time');
const socialPreviusTime = document.getElementById('social_previous_time');

// Elementos da div Self Care
const selfCareCurrentTime = document.getElementById('selfCare_current_time');
const selfCarePreviusTime = document.getElementById('selfCare_previous_time');

weekly.addEventListener('click', () => {
  // Atualiza os elementos da div Work
  workCurrentTime.textContent = '32hrs';
  workPreviusTime.textContent = 'Last Weekly - 36hrs';

  // Atualiza os elementos da div Play
  playCurrentTime.textContent = '10hrs';
  playPreviusTime.textContent = 'Last Weekly - 8hrs';

  // Atualiza os elementos da div Study
  studyCurrentTime.textContent = '4hrs';
  studyPreviusTime.textContent = 'Last Weekly - 7hrs';

  // Atualiza os elementos da div Exercise
  exerciseCurrentTime.textContent = '4hrs';
  exercisePreviusTime.textContent = 'Last Weekly - 5hrs';

  // Atualiza os elementos da div Social
  socialCurrentTime.textContent = '5hrs';
  socialPreviusTime.textContent = 'Last Weekly - 10hrs';

  // Atualiza os elementos da div Self Care
  selfCareCurrentTime.textContent = '2hrs';
  selfCarePreviusTime.textContent = 'Last Weekly - 2hrs';
});



const monthly = document.getElementById('monthly_select');

monthly.addEventListener('click', () => {
  // Atualiza os elementos da div Work
  workCurrentTime.textContent = '103hrs';
  workPreviusTime.textContent = 'Last Monthly - 128hrs';

  // Atualiza os elementos da div Play
  playCurrentTime.textContent = '23hrs';
  playPreviusTime.textContent = 'Last Monthly - 29hrs';

  // Atualiza os elementos da div Study
  studyCurrentTime.textContent = '13hrs';
  studyPreviusTime.textContent = 'Last Monthly - 19hrs';

  // Atualiza os elementos da div Exercise
  exerciseCurrentTime.textContent = '11hrs';
  exercisePreviusTime.textContent = 'Last Monthly - 18hrs';

  // Atualiza os elementos da div Social
  socialCurrentTime.textContent = '21hrs';
  socialPreviusTime.textContent = 'Last Monthly - 23hrs';

  // Atualiza os elementos da div Self Care
  selfCareCurrentTime.textContent = '7hrs';
  selfCarePreviusTime.textContent = 'Last Monthly - 11hrs';
});
