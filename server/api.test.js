const assert = require('assert').strict;
const http = require('http');
const app = require('../server');
const catalog = require('./catalog');

const server = app.listen(0, '127.0.0.1', async () => {
  const get = route => new Promise((resolve, reject) => {
    http.get({ host: '127.0.0.1', port: server.address().port, path: route }, res => {
      let body = '';
      res.setEncoding('utf8');
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        try {
          assert.match(res.headers['content-type'], /application\/json/);
          resolve({ status: res.statusCode, body: JSON.parse(body) });
        } catch (error) { reject(error); }
      });
    }).on('error', reject);
  });

  try {
    assert.deepEqual(await get('/api/health'), { status: 200, body: { status: 'ok' } });
    assert.deepEqual(await get('/api/tormenta'), { status: 200, body: catalog });
    for (const resource of Object.keys(catalog)) {
      assert.deepEqual(await get(`/api/tormenta/${resource}`), { status: 200, body: catalog[resource] });
    }
    for (const route of ['/api/tormenta/invalid', '/api/tormenta/toString', '/api/unknown']) {
      const response = await get(route);
      assert.equal(response.status, 404);
      assert.equal(typeof response.body.error, 'string');
    }
    console.log('API: catálogo, 7 recursos e respostas 404 validados.');
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  } finally {
    server.close();
  }
});
