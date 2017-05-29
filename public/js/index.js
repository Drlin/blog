class PraiseButton {
	constructor (num, element) {
		this.num = num;
		this.element = element;
	}

	add (num) {
		return num + 1
	}

	clickAction () {
		this.element.addEventListener('click', () => {
			let span = document.querySelector('span')
			let display = span.style.display
			span.style.display = display === 'block' ? 'none' : 'block'
			this.num = this.add(this.num)
		})
	}
}

class Thumb extends PraiseButton {
	constructor(num, element) {
		super(num, element)
	}
}