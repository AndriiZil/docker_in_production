const express = require('express');

const app = express();

app.get('/', (req, res) => {
    return res.send('Worked.');
});

app.listen(3000);
