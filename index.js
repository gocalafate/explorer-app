const express = require('express');
const app = express();
const i18n = require('i18n-express');
const path = require('path');
const cookieParser = require('cookie-parser');


app.set('port', (process.env.PORT || 5000));
app.use(express.static(path.join(__dirname, 'public')));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(cookieParser());
app.use(i18n({
  translationsPath: path.join(__dirname, '/i18n'),
  siteLangs: ["en","es"]
}));

app.get('/', function(request, response) {
  response.render('pages/index');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});