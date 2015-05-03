module.exports = function (app, config, express){

  var bodyParser = require('body-parser');

  app.use(express.static('public'));
  app.use(bodyParser.json())

  app.get('/', function (req, res) {
    res.render('home');
  });

};