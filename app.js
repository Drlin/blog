const Koa = require('koa');
const Router = require('koa-router')
const path = require('path')
const serve = require('koa-static')
const co = require('co');
const socketIo = require('socket.io');
const bodyParser = require('koa-bodyparser')

const app = new Koa();
const router = new Router();

app.use(serve(path.resolve('html/dist')));

app
  .use(router.routes())
  .use(router.allowedMethods());

const io = socketIo(app.listen(3000));
const messages = [];

io.on('connection', socket => {
  socket.on('login', data => {
    io.emit('someoneComing', data)
  });
  socket.on('talk', ({name, message}) => {
    console.log({name, message})
    io.emit('someoneTalking', {name, message})
  })
});

