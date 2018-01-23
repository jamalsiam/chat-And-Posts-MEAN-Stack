let app = require('./setup');
let handlers=app.handlers;

//user API
app.post('/api/user/signup', handlers.handelUser.signUp);
app.post('/api/user/signin', handlers.handelUser.signIn);
app.post('/api/user/getuserinfo',handlers.handelUser.getUserInfo);
app.post('/api/user/postdata',handlers.handelUser.postData);

//post API
app.post('/api/post/sharepost',handlers.handelPost.sharePost);
app.post('/api/post/deletepost',handlers.handelPost.deletePost);
app.post('/api/post/getprofilepost',handlers.handelPost.getProfilePost);
app.post('/api/post/getonepost',handlers.handelPost.getOnePost);