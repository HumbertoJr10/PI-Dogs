const server = require('./src/app.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(3001, () => {
    console.log('------Server Escuchando en el puerto 3001------'); // eslint-disable-line no-console
  });
});