/* eslint-disable no-console, no-use-before-define */
import path from 'path';
import Express from 'express';
import React from 'react';
// import App from '../app/app';

const app = new Express();
const port = 3000;

// Use this middleware to server up static files built into dist
app.use(require('serve-static')(path.join(__dirname, '../dist')));

// This is fired every time the server side receives a request
app.use(handleRender);

function handleRender(req, res) {
  // const html = React.renderToString(<App/>);
  // Send the rendered page back to the client
  res.send(renderFullPage());
}

function renderFullPage() {
  return `
    <!doctype html>
    <html>
      <head>
        <title>Redux Universal Example</title>
      </head>
      <body>
        <div id="app"></div>
        <script src="/bundle.js"></script>
      </body>
    </html>
    `;
}

app.listen(port, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`);
  }
});
