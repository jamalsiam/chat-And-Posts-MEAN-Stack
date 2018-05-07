const app = require('./setup');
const handlers = app.handlers;
const io = app.io;
const model = require('./models');

io.on('connection', socket => {
  socket.on('disconnect', () => { });
  socket.on('UserConnectionStatus', data => {
    if (data.id) {
      socket.broadcast.emit(data.id, data);
      model.User.update({ _id: data.id }, { status: data.status }, function (
        err,
        affected,
        resp
      ) { });
    }
  });

  socket.on('NotifyNumber', data => {
    model.Queue.find({
      senderId: data.info.user1Id,
      receiverId: data.info.user2Id
    }).then(messageInQueue => {
      socket.broadcast.emit(data.channelName, {
        notifyLength: messageInQueue.length,
        emailSender: data.info.email
      });
      socket.broadcast.emit(data.channelName + 'content', data.info.message);
      socket.broadcast.emit(data.info.user2Id + 'list', {
        senderId: data.info.user1Id,
        receiverId: data.info.user2Id
      });
    });
  });

  socket.on('notification', data => {
    socket.broadcast.emit(data.to+ 'notification', {data});
    
  });
});

//user APIs
app.post('/api/user/signup', handlers.handelUser.signUp);
app.post('/api/user/signin', handlers.handelUser.signIn);
app.post('/api/user/getuserinfo', handlers.handelUser.getUserInfo);
app.get('/api/user/signupasguest', handlers.handelUser.signUpAsGuest);
app.post('/api/user/changeprofileimage', handlers.handelUser.changeProfileImage);
app.post('/api/user/changeprofilecover',handlers.handelUser.changeProfileCover);
app.post('/api/user/changeprofileinfo', handlers.handelUser.changeProfileInfo);
app.post('/api/user/changeuserinterests', handlers.handelUser.changeUserInterests);
app.post('/api/user/getuserprofile', handlers.handelUser.getUserProfile);
app.post('/api/user/checktoken', handlers.handelUser.checkToken);

//post APIs
app.post('/api/post/sharepost', handlers.handelPost.sharePost);
app.post('/api/post/deletepost', handlers.handelPost.deletePost);
app.post('/api/post/getprofilepost', handlers.handelPost.getProfilePost);
app.post('/api/post/getonepost', handlers.handelPost.getOnePost);
app.post('/api/post/getFollowingPosts', handlers.handelPost.getFollowingPosts);
app.get('/api/post/randomSuggest', handlers.handelPost.randomSuggest);
app.post('/api/post/deletepost', handlers.handelPost.deletePost);
app.post('/api/post/likeandcommentlength', handlers.handelPost.likeAndCommentLength);

//comment APIs
app.post('/api/comment/sharecomment', handlers.handelComment.putComment);
app.post('/api/comment/deletecomment', handlers.handelComment.deleteComment);
app.post('/api/comment/viewcomments', handlers.handelComment.viewComments);

//like APIs
app.post('/api/post/putorremovelike', handlers.handelLike.putOrRemoveLike);

//message APIs
app.post('/api/message/sendmessage', handlers.handelMessage.sendMessage);
app.post('/api/message/getmessages', handlers.handelMessage.getMessages);
app.post('/api/message/deletemessagefromqueue', handlers.handelMessage.deleteMessageFromQueue);
app.post('/api/message/getsortuser', handlers.handelMessage.getSortUser);
app.post('/api/message/getusertitle', handlers.handelMessage.getUserTitle);

//follow APIs
app.post('/api/follow/checkiffollow', handlers.handelFollow.checkIfFollow);
app.post('/api/follow/addorremovefollow', handlers.handelFollow.follow);
