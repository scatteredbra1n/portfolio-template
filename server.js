const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;
const ENV = process.env.ENV || 'development';

app.use('/', express.static('dist'))

if (ENV === 'production') {
  app.use((req, res, next) => {
    if (req.header('x-forwarded-proto') !== 'https') {
		console.log("detected http, redirecting to https")
		res.redirect(`https://${req.header('host')}${req.url}`)	
    } else {
    	next()
    }
  })
}

app.listen(PORT, () => console.log(`Your app is listening on port ${PORT} running in ${ENV} mode.`));

