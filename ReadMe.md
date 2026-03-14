# CIS 325 README.md

This is a collection of notes, assignments, and projects for my CIS325 Web
Development class at Murray State University. 

For the current Assignment, please clone the repository, go into the 
demographics-crud directory and use the 'node server.js' or 'nodemon server.js' 
to correctly run the webpage. 

Once in the webpage, you can fill out the data fields and press submit for a POST 
api call. This updates a table that is dynamically created within a DB with your information.
Afterwards, use these functions to interact with the account IDs and such.

POST
fetch('http://localhost:3000/api/demographics', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    email: 'john@example.com',
    gender: 'Male',
    city: 'New York'
  })
})
.then(response => response.json())
.then(data => console.log(data));

This code will add a new account and increment the ID. 

GET
fetch('http://localhost:3000/api/demographics')
.then(response => response.json())
.then(data => console.log(data));

This code will list all of the current account IDs, and from there you can view their data.

PUT (updating account)
fetch('http://localhost:3000/api/demographics/1', {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    firstName: 'Jane',
    lastName: 'Doe',
    age: 30,
    email: 'jane@example.com',
    gender: 'Female',
    city: 'Los Angeles'
  })
})
.then(response => response.json())
.then(data => console.log(data));

This code will update a current record with new information. In this case, 
it updates the first ID, or first entry in the database. 

DELETE
fetch('http://localhost:3000/api/demographics/1', {
  method: 'DELETE'
})
.then(response => response.json())
.then(data => console.log(data));

This code deletes the first ID, or first entry in the database.
