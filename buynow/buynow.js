var emailInput = document.getElementById('mail');
emailInput.addEventListener('input', function() {
  if (!emailInput.validity.valid) {
    emailInput.classList.add("invalid");
  } else {
    emailInput.classList.remove("invalid");
  }
});