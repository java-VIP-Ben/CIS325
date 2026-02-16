// Benjamin Lukens CIS325 Assignment1 Script.js

// Select the button and paragraph elements
const button = document.getElementById('myButton');
const paragraph = document.getElementById('demo');

// Add an event listener for a click
if(button && paragraph) {
  button.addEventListener('click', () => {
    alert("Annoying Dropdown!");
    // Change the paragraph's text and the button's color when clicked
    paragraph.textContent = 'Thank you for visiting my webpage!';
    button.style.backgroundColor =
      button.style.backgroundColor === 'red' ? 'blue' : 'red';
  });
}

const listButton = document.getElementById('listButton');
const ul = document.getElementById('myList');
const itemInput = document.getElementById('itemInput');

if(listButton && ul && itemInput) {
  // adding list elements to dynamic page
  listButton.addEventListener('click', () => {
    const newItemText = itemInput.value;
    if(newItemText !== '') {
      const newLi = document.createElement('li');
      newLi.textContent = newItemText;
      ul.appendChild(newLi);
      itemInput.value = '';
    }
  });
}
