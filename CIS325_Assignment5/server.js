const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Hardcoded user credentials
  const validUsername = 'admin';
  const validPassword = '12345';

  // Validate credentials
  if (username === validUsername && password === validPassword) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

app.post('/api/demographics', (req, res) => {
  const { firstName, lastName, age, email, gender, city } = req.body;
  const query = ` INSERT INTO demographics (firstName, lastName, age, email, gender, city) VALUES (?, ?, ?, ?, ?, ?) `;
  db.run(query, [firstName, lastName, age, email, gender, city], function (err) { if (err) return res.status(500).json({ error: err.message }); res.json({ id: this.lastID });
  });
});

app.get('/api/demographics', (req, res) => {
  db.all('SELECT * FROM demographics', (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

app.put('/api/demographics/:id', (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, age, email, gender, city } = req.body;
  const query = `
UPDATE demographics SET firstName = ?, lastName = ?, age = ?, email = ?, gender = ?, city = ?
WHERE id = ?
`;
  db.run(query, [firstName, lastName, age, email, gender, city, id], function (err) { if (err) return res.status(500).json({ error: err.message }); res.json({ message: 'Record updated successfully' });
  });
});

app.delete('/api/demographics/:id', (req, res) => {
  const { id } = req.params;
  db.run('DELETE FROM demographics WHERE id = ?', id, function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Record deleted successfully' });
  });
});
