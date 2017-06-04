'use strict';

const express = require('express');
const pg = require('pg');
const app = express();
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;
const conString = 'postgress://localhost:5432';
const client = new pg.Client(process.env.DATABASE_URL || conString);

// client.connect();
// client.on('error', err => console.error(err));

app.use(express.static('./public'));
app.get('*', (req, res) => {
  res.sendFile('index.html', {root: './public'});
});
app.listen(PORT, () => console.log(`Server started on port ${PORT}!`));

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}
