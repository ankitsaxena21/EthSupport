const next = require('next');
const express = require('express');

const port = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== 'production';

const routes = require('./src/routes');

const app = next({ dev });

const handler = routes.getRequestHandler(app);

app.prepare().then(() => {
  const server = express();
  server.get('*', (req, res) => handler(req, res));
  server.listen(port, err => {
    if (err) throw err;
    console.log(`> ready on http://localhost:${port}`);
  });
});
