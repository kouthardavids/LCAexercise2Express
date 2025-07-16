import express from 'express';

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies (for POST, PATCH)
app.use(express.json());

// EMPLOYEES ROUTES

// GET all employees
app.get('/employees', (req, res) => {
  res.json({ message: 'This is the GET employees path — returning all employees' });
});

// POST to add a new employee
app.post('/employees', (req, res) => {
  res.json({ message: 'This is the POST employees path — a new employee has been added' });
});

// PATCH to partially update an employee
app.patch('/employees', (req, res) => {
  res.json({ message: 'This is the PATCH employees path — employee details partially updated' });
});

// DELETE an employee
app.delete('/employees', (req, res) => {
  res.json({ message: 'This is the DELETE employees path — employee has been removed' });
});


// MANAGERS ROUTES

// GET all managers
app.get('/managers', (req, res) => {
  res.json({ message: 'This is the GET managers path — returning all managers' });
});

// POST to add a new manager
app.post('/managers', (req, res) => {
  res.json({ message: 'This is the POST managers path — a new manager has been added' });
});

// PATCH to partially update a manager
app.patch('/managers', (req, res) => {
  res.json({ message: 'This is the PATCH managers path — manager details partially updated' });
});

// DELETE a manager
app.delete('/managers', (req, res) => {
  res.json({ message: 'This is the DELETE managers path — manager has been removed' });
});


// Start the server
app.listen(PORT, () => {
  console.log(`PICK ’n STEAL API running on http://localhost:${PORT}`);
});