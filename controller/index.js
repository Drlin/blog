'use strict'

const index = {
	index () {
		return async(ctx, nex) => {
			ctx.body = await ctx.render('index.html', {
				title: '博客'
			})
		}
	}
}

module.exports = {
	index
}