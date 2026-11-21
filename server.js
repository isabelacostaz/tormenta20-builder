const express = require('express');
const path = require('path');
const catalog = require('./server/catalog');
const app = express();
app.get('/api/health', (req, res) => res.json({ status: 'ok' }));
app.get('/api/tormenta', (req, res) => res.json(catalog));
app.get('/api/tormenta/:resource', (req, res) => {
  if (!Object.prototype.hasOwnProperty.call(catalog, req.params.resource)) {
    return res.status(404).json({ error: 'Recurso não encontrado.' });
  }
  return res.json(catalog[req.params.resource]);
});
app.use('/api', (req, res) => res.status(404).json({ error: 'Rota não encontrada.' }));
app.use(express.static(path.join(__dirname, 'dist/tormenta20-builder')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'dist/tormenta20-builder/index.html')));

if (require.main === module) {
  const port = process.env.PORT || 8080;
  app.listen(port, () => console.log(`Servidor disponível em http://localhost:${port}`));
}
module.exports = app;
