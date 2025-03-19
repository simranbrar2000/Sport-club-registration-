const form = document.getElementById('registration-form');
const confirmationMessage = document.getElementById('confirmation-message');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const id = document.getElementById('id').value;
  const fullName = document.getElementById('fullName').value;
  const address = document.getElementById('address').value;
  const status = document.getElementById('status').value;

  let fee = 0;
  if (status === 'student') {
    fee = 10;
  } else if (status === 'staff') {
    fee = 50;
  }

  const userData = {
    id,
    fullName,
    address,
    status,
    fee,
  };

  fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
  .then((response) => response.json())
  .then((data) => {
    confirmationMessage.innerHTML = `Thank you for registering, ${fullName}! Your registration fee is $${fee}.`;
  })
  .catch((error) => {
    console.error(error);
  });
});
