const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use('/', express.static('dist'))

app.listen(PORT, () => console.log(`Your app is listening on port ${PORT}!`));