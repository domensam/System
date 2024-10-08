const form = document.getElementById('form');
const employeeIdInput = document.getElementById('employee-id');
const passwordInput = document.getElementById('password-input');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent form submission initially
  let errors = false;

  const employeeId = employeeIdInput.value;
  const password = passwordInput.value;

  // Validate Employee ID (e.g., 5 digits followed by "-" and 3 uppercase letters for department)
  const employeeIdPattern = /^\d{5}-[A-Z]{3}$/;
  if (!employeeIdPattern.test(employeeId)) {
    errors = true;
  }

  // Validate Password (at least 8 characters, uppercase, lowercase, special character)
  if (password.length < 8 ||
      !/[a-z]/.test(password) ||   // Must contain a lowercase letter
      !/[A-Z]/.test(password) ||   // Must contain an uppercase letter
      !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {  // Must contain a special character
    errors = true;
  }

  // Show generic error message if any errors are found
  if (errors) {
    errorMessage.innerText = 'Invalid Employee ID or Password';
    // Make the employee ID and password inputs red
    employeeIdInput.parentElement.classList.add('incorrect');
    passwordInput.parentElement.classList.add('incorrect');
  } else {
    errorMessage.innerText = ''; // Clear the error message
    // Submit the form if no errors
    form.submit();
  }
});

// Reset error message and field styles when input changes
[employeeIdInput, passwordInput].forEach(input => {
  input.addEventListener('input', () => {
    input.parentElement.classList.remove('incorrect');
    errorMessage.innerText = '';
  });
});
