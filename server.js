const express = require('express');
const request = require('request');
const app = express();

// Proxy เกม
app.get('/game', (req,res)=>{
    const url='https://tottygame.github.io/test/';
    request(url).pipe(res);
});
app.use(express.static('public'));

app.listen(3000,()=>console.log('Server running on port 3000'));
