let app = require('./setup');
let handlers=app.handlers;

app.post('/api/postdata',handlers.handelUser.postData);