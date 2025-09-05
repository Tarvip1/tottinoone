const express = require('express');
const request = require('request');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JS ของคุณ)
app.use(express.static(path.join(__dirname, 'public')));

// Proxy route สำหรับเกม
app.get('/game', (req, res) => {
    const url = 'https://totti911-EasyBuyLao.store';
    request({ url, headers: { 'User-Agent': 'Mozilla/5.0' } })
        .on('error', (err) => res.status(500).send('Error fetching game'))
        .pipe(res);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
