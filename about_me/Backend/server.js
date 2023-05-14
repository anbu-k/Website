const express = require('express');
const path = require('path');
const app = express();

app.use('/images', express.static(path.join(__dirname, 'images')));

app.listen(5000, () => {
  console.log('Server is listening on port 5000');
});
