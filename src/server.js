'use strict';

// 3rd party resources
const express = require('express');

const app = express();

app.get('*', (req, res) => {
  res.status(200).send('Bangerific, you made it 😤🤘');
});

module.exports = {
  app: app,
  start: (PORT) => {
    app.listen(PORT, () => {console.log(`Alert, awake, alive on ${PORT}`); });
  },
};
