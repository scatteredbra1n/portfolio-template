const sslRedirect = require('heroku-ssl-redirect').default;
const express = require('express');

const app = express();
const PORT = process.env.PORT || 5000;
const ENV = process.env.ENV || 'development';

ENV === "production" && app.use(sslRedirect());

app.use('/', express.static('dist'));

app.listen(PORT, () => console.log(`Your app is listening on port ${PORT} running in ${ENV} mode.`));

