const express = require('express');
const app = express();
const port = 8089;
app.get('/',(req, res) => {
    res.send('hello express');
});
app.listen(port, () => {
    console.log("8089端口以打开");
});