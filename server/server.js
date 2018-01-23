let app = require('./setup');
let handlers=app.handlers;

app.post('/api/user/signup', handlers.handelUser.signUp);
app.post('/api/user/signin', handlers.handelUser.signIn);
app.post('/api/user/getuserinfo',handlers.handelUser.getUserInfo);
app.post('/api/user/postdata',handlers.handelUser.postData);