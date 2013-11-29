// search, auth, fork, commit, pull req
var Client = require('github');
var client = new Client({
  version: '3.0.0'
});
client.repos.getContent({
  user: 'JuanitoFatas',
  repo: 'Computer-Science-Glossary',
  path: 'dict.textile',
  ref: 'master'
}, function(err, res) {
  if (!err) {
    console.log(new Buffer(res.content, 'base64').toString('utf8'));
  }
});
