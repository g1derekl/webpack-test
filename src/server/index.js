import express from 'express';

const app = express();

app.use('/public', express.static('build/client'));

app.get('/', (req, res) => {
  res.sendFile('html/index.html', { root : __dirname + '/../../'});
});

app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});
