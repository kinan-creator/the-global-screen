const express = require('express');
const app = express();
const path = require('path');

app.use(express.json());
app.use(express.static(__dirname));

app.get('*', (req, res) => {
    const filePath = path.join(__dirname, req.path === '/' ? 'index.html' : req.path);
    res.sendFile(filePath, (err) => {
        if (err) res.sendFile(path.join(__dirname, 'index.html'));
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server running on port ' + PORT));
