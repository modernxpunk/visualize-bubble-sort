const countOfBlocks = 600
const delay = 30

const board = document.querySelector('.board')
const w = 1000
const h = 600

board.style.width = w + 'px'
board.style.height = h + 'px'

const numbers = []
const widthBlock = Math.floor(w / countOfBlocks)
for (let i = 0; i < countOfBlocks; i++) {
	const block = document.createElement('div')
	numbers[i] = Math.floor(Math.random() * h)
	block.className = 'block'
	block.style.width = `${widthBlock}%`
	block.style.height = `${numbers[i]}px`
	board.append(block)
}

const blocks = board.querySelectorAll('.block')
for (let i = 0; i < countOfBlocks - 1; i++) {
	setTimeout(() => {
		for (let j = i + 1; j < countOfBlocks; j++) {
			if (numbers[i] > numbers[j]) {
				numbers[i] ^= numbers[j]
				numbers[j] ^= numbers[i]
				numbers[i] ^= numbers[j]
				blocks[i].style.height = `${numbers[i]}px`
				blocks[j].style.height = `${numbers[j]}px`
			}
		}

	}, delay * i)
}	
