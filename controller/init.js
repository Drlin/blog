const {index} = require('./index.js')
const init = {
	init (router) {
		router.get('/index', index.index())
	}
}

module.exports = init