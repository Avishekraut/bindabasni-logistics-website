const next = require('next');
const http = require('http');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = false;                 
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http.createServer((req, res) => {
    handle(req, res);
  }).listen(port, () => {
    console.log(`> Ready on port ${port}`);
  });
});