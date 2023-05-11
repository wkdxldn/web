const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const username = event.target.username.value;
  const password = event.target.password.value;

  // Do something with the username and password (e.g. send to server for authentication)
});
