const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/about', (req, res) => res.sendFile(path.join(__dirname, 'about.html')));
app.get('/how-it-works', (req, res) => res.sendFile(path.join(__dirname, 'how-it-works.html')));
app.get('/support', (req, res) => res.sendFile(path.join(__dirname, 'support.html')));
app.get('/privacy', (req, res) => res.sendFile(path.join(__dirname, 'privacy.html')));
app.get('/terms', (req, res) => res.sendFile(path.join(__dirname, 'terms.html')));
app.get('/refund', (req, res) => res.sendFile(path.join(__dirname, 'refund.html')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port ' + PORT));
