var fs = require('fs');
var Fuse = require('fuse.js');
var client = new (require('github'))({
  version: '3.0.0'
});
require('colors');

var notEmpty = function(str) { return !!str.trim(); };
var trim = function(str) { return str.trim(); };

var fetch = function(callback) {
  // TODO cache
  client.repos.getContent({
    user: 'JuanitoFatas',
    repo: 'Computer-Science-Glossary',
    path: 'dict.textile',
    ref: 'master'
  }, function(err, res) {
    callback(err, new Buffer(res.content, 'base64').toString('utf8'));
  });
};

var search = function(content, key) {
  var reg = /h2\. ([A-Z])([^]*?)(?=h2\. [A-Z])/g;
  var match,
      table = [];
  while (match = reg.exec(content)) {
    match[2].split('\n')
      .filter(notEmpty)
      .slice(1)
      .forEach(function(entry) {
        var words = entry.split('|').filter(notEmpty).map(trim);
        table.push({origin: words[0], translations: words.slice(1)});
      });
  }
  var fuse = new Fuse(table, {keys: ['origin']});
  return fuse.search(key).slice(0, 3);
};

module.exports = function(key) {
  fetch(function(err, content) {
    if (err) throw err;

    var results = search(content, key);
    console.log('Fuzzy match including: '.grey);
    results.forEach(function(entry) {
      console.log(entry.origin.green);
      entry.translations.forEach(function(translation) {
        console.log('  ' + translation.blue);
      });
    });
  });
};
