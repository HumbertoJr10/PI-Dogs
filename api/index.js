const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const { PORT } = require('./config')

// Syncing all the models at once.
conn.sync({ alter: true }).then(() => {
  server.listen(PORT, () => {
    console.log(`------Server Escuchando en el puerto ${PORT}------`); // eslint-disable-line no-console
  });
});