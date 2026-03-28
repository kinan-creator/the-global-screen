const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static('.'));

app.get('*', (req, res) => {
    const file = req.path === '/' ? 'index.html' : req.path.slice(1);
    res.sendFile(path.join(__dirname, file), (err) => {
        if (err) res.sendFile(path.join(__dirname, 'index.html'));
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port ' + PORT));
