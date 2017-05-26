'use strict';

const express = require('express');
const app = express();
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

// app.listen(PORT, function() {
//   console.log('The server is setup and serving via localhost: ' + PORT);
// });

app.get('*', (req, res) => {
  res.sendFile('index.html', {root: './public'});
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}
