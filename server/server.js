let app = require('./setup');
let handlers=app.handlers;

//user APIs
app.post('/api/user/signup', handlers.handelUser.signUp);
app.post('/api/user/signin', handlers.handelUser.signIn);
app.post('/api/user/getuserinfo',handlers.handelUser.getUserInfo);
app.post('/api/user/postdata',handlers.handelUser.postData);

//post APIs
app.post('/api/post/sharepost',handlers.handelPost.sharePost);
app.post('/api/post/deletepost',handlers.handelPost.deletePost);
app.post('/api/post/getprofilepost',handlers.handelPost.getProfilePost);
app.post('/api/post/getonepost',handlers.handelPost.getOnePost);

//comment APIs
app.post('/api/comment/putcomment',handlers.handelComment.putComment);
app.post('/api/comment/deletecomment',handlers.handelComment.deleteComment);
app.post('/api/comment/getcommentpost',handlers.handelComment.getCommentPost);

//comment APIs
app.post('/api/like/putlike',handlers.handelLike.putLike);

//message APIs
app.post('/api/message/message',handlers.handelMessage.sendMessage);

