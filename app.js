const express = require('express');
const app = express();
const port = 9000;

app.listen(port, (err) => {
  if (err) {
    console.log('Error: ', err);
  } else {
    console.log(`App is running on port ${port}`);
  }
});
