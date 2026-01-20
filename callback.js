const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/callback', (req, res) => {
  console.log('=== CALLBACK DEBUG ===');
  console.log('Full URL:', req.originalUrl);
  console.log('Query params:', req.query);
  console.log('========================');

  const code = req.query.code;

  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>WHOOP OAuth Success</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <style>
        body {
          font-family: sans-serif;
          text-align: center;
          padding: 50px;
          background: #f5f5f5;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background: white;
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }
        h1 { color: #10b981; }
        .code { 
          background: #f0f9ff;
          padding: 20px;
          border-radius: 5px;
          font-size: 18px;
          margin: 20px 0;
          word-break: break-all;
        }
        .debug {
          background: #f3f4f6;
          padding: 15px;
          border-radius: 5px;
          text-align: left;
          font-family: monospace;
          font-size: 12px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>✅ Authorization Successful!</h1>
        
        <div class="debug">
          <strong>Debug Info:</strong><br>
          URL: ${req.originalUrl}<br>
          Query: ${JSON.stringify(req.query)}
        </div>
        
        ${code 
          ? `<div class="code"><strong>AUTHORIZATION CODE:</strong><br>${code}</div>`
          : `<p><strong>❌ No code found</strong></p>`
        }
        
        <p><strong>Next step:</strong> Send this code to Clawdi in Telegram.</p>
      </div>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`WHOOP Callback Server listening on port ${port}`);
});
