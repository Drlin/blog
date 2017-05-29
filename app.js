const Koa = require('koa');
const Router = require('koa-router')
const serve = require('koa-static')
const path = require('path')
const render = require('koa-swig')
const co = require('co');
const init = require('./controller/init.js')


const app = new Koa();
const router = new Router();

init.init(router)

app.context.render = co.wrap(render({
	root: path.join(__dirname, './views'),
  	autoescape: true,
	cache: 'memory',
	ext: 'html', 
	varControls: ['[[', ']]'],
	writeBody: false
}));

app
  .use(router.routes())
  .use(router.allowedMethods());

app.use(serve(path.resolve('./public')));

app.listen(3000);