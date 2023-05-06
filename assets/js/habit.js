const habitForm = document.getElementById('habit-form');

habitForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const habitNameInput = document.getElementById('habit-name');
  const habitDescriptionInput = document.getElementById('habit-description');
  const habitFrequencyInput = document.getElementById('habit-frequency');
  const habitName = habitNameInput.value;
  const habitDescription = habitDescriptionInput.value;
  const habitFrequency = habitFrequencyInput.value;

  // Store the habit in local storage
  const habits = JSON.parse(localStorage.getItem('habits')) || [];
  habits.push({
    name: habitName,
    description: habitDescription,
    frequency: habitFrequency
  });
  localStorage.setItem('habits', JSON.stringify(habits));

  // Clear the form inputs
  habitNameInput.value = '';
  habitDescriptionInput.value = '';
  habitFrequencyInput.value = 'daily';

  // Show a success message
  alert('Habit created successfully!');
});
