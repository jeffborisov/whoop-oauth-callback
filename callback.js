const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/callback', (req, res) => {
  const code = req.query.code;
  console.log('Authorization code:', code);
  res.send(`<h1 style="color: green;">✅ Code: ${code}</h1>`);
});

app.listen(port, () => console.log(`Listening on ${port}`));
