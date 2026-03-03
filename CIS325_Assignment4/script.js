// Benjamin Lukens CIS325 Assignment 4
const form = document.getElementById('submitForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();  // Prevent form from submitting

  let isValid = true;  // Flag for overall form validity

  // Clear previous error messages
  document.getElementById('fnameError').innerText = '';
  document.getElementById('lnameError').innerText = '';
  document.getElementById('emailError').innerText = '';
  document.getElementById('passwordError').innerText = '';
  document.getElementById('password2Error').innerText = '';
  document.getElementById('ageError').innerText = '';
  document.getElementById('phoneError').innerText='';

  // Validate Name (non-empty)
  const fname = document.getElementById('fname').value;
  if (fname.trim() === '') {
    alert('Please enter a valid first name.');
    isValid = false;
  }

  const lname = document.getElementById('lname').value;
  if (lname.trim() === '') {
    alert('Please enter a valid last name.');
    isValid = false;
  }

  // Validate Email (must match email format)
  const email = document.getElementById('email').value;
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    alert('Invalid email format.');
    isValid = false;
  }

  // Validate Password (minimum length of 8 characters)
  const password = document.getElementById('password').value;
  if (password.length < 8) {
    alert('Password must be at least 8 characters long.');
    isValid = false;
  }

  const password2 = document.getElementById('password2').value;
  if(password && password2) {
    if (password2 != password) {
      alert('Passwords must match!');
      isValid = false;
    }
  }

  // Validate Age (must be 18 or older)
  const age = document.getElementById('age').value;
  if (age < 18) {
    alert('You must be 18 or older to register.');
    isValid = false;
  }

  // Validate phone number pattern (this could also be done in the HTML file)
  const phone = document.getElementById('phone').value;
  const phonePattern = /^\+?[1-9][0-9]{7,14}$/;
  if (!phonePattern.test(phone)) {
    alert('Invalid phone number format');
    isValid = false;
  }

  // Submit the form if all fields are valid
  if (isValid) {
    alert('Submission Successful! Check console for JSON data.');
    console.log('Form is valid!');
    var account = new Object();
    account.firstName = fname;
    account.lastName = lname;
    account.email = email;
    account.password = password; // this is not a secure way of handling passwords!
    account.age = age;
    account.phoneNumber = phone;
    var jsonString = JSON.stringify(account);
    console.log(jsonString);
  }
});
