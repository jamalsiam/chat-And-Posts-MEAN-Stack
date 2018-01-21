var app = require('./setup');
var handlers=app.handlers;

app.post('/api/postdata',handlers.handelUser.postData);

