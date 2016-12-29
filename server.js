const fs = require('fs');
const path = require('path');
const express = require('express');
const resolve = file => path.resolve(__dirname, file);

const app = express();

var layout = fs.readFileSync('./dist/index.html', 'utf8');


app.use('/dist', express.static(resolve('./dist')));

app.get('*', (req, res) => {
  res.end(layout);
});

app.listen(5000, function (error) {
  if (error) throw error;
  console.log('Server is running at localhost:5000');
})
