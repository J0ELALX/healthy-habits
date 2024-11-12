// User data
let username = "User";
let startDate = new Date().toISOString().split('T')[0];

// Habit tracking data
let habits = {
    physicalActivity: false,
    nutrition: false,
    sleep: false,
    hydration: false,
    relaxation: false,
};

// Challenge data
let weeklyChallenges = {
    week1: "Complete a 30-minute walk today!",
    week2: "Eat at least 5 servings of fruits and vegetables.",
    // Add more challenges here...
};
let currentWeek = 1;

// Initialize the app
function initialize() {
    document.getElementById('username').textContent = username;
    document.getElementById('start-date').textContent = startDate;
    loadHabitTracking();
    loadWeeklyChallenge();
}

// Load habit tracking UI
function loadHabitTracking() {
    const habitTracking = document.getElementById('habit-tracking');
    habitTracking.innerHTML = '';

    for (const habit in habits) {
        const habitItem = document.createElement('div');
        habitItem.classList.add('habit-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = habits[habit];
        checkbox.onchange = () => toggleHabit(habit);

        const label = document.createElement('label');
        label.textContent = habit;

        habitItem.appendChild(checkbox);
        habitItem.appendChild(label);
        habitTracking.appendChild(habitItem);
    }
}

// Toggle habit state
function toggleHabit(habit) {
    habits[habit] = !habits[habit];
}

// Load weekly challenge
function loadWeeklyChallenge() {
    const challengeText = weeklyChallenges[`week${currentWeek}`] || "No challenge for this week.";
    document.getElementById('weekly-challenge').textContent = challengeText;
}

// Start the app
initialize();
