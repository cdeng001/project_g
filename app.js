var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');

var app = express();

var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(3041);

server.lastPlayderID = 0;

var RoomController = require('./roomController');

//socket io 
io.on('connection', function(socket){
  
  console.log('connection with ID '+socket.id);
  
  socket.on('join game', function(data){

    console.log(data);

    var room = null;

    switch(data.join_type){
      case 'id':
        break;
      case 'random':
        break;
      case 'create':
        break;
      default:
        console.log('unknown join type.')
        break;
    }

    if(room !== null){
      //found valid join type and got instance of room

      socket.player = {
        id: server.lastPlayderID++,
        name: data.name,
        room: room,
        character: null,
      };
    }
    

  });

});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
