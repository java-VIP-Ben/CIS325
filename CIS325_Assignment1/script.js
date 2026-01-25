// Benjamin Lukens CIS325 Assignment1 Script.js

// Select the button and paragraph elements
const button = document.getElementById('myButton');
const paragraph = document.getElementById('demo');

// Add an event listener for a click
button.addEventListener('click', () => {
  alert("Annoying Dropdown!");
    // Change the paragraph's text and the button's color when clicked
    paragraph.textContent = 'Thank you for visiting my webpage!';
    button.style.backgroundColor =
        button.style.backgroundColor === 'red' ? 'blue' : 'red';
});
