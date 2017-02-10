import { Component } from '@angular/core';
import { BestScoreManager } from './app.storage.service'

@Component({
	selector: 'ngx-snake',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css'],
	host: {
		'(document:keydown)': 'handleKeyboardEvents($event)'
	}
})
export class AppComponent {
	constructor(
		private bestScoreService: BestScoreManager
	) {
		this.setBoard();
	}

	public best_score = this.bestScoreService.retrieve();

	public BOARD_SIZE: number = 18;
	public board = [];
	public interval: number;
	public tempDirection: number;
	public isGameOver: boolean = false;
	public gameStarted: boolean = false;
	public newBestScore: boolean = false;
	private score: number = 0;
	private showMenuChecker: boolean = false;
	public default_mode: string = 'classic';

	public CONTROLS = {
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40
	};

	public COLORS = {
		GAME_OVER: '#D24D57',
		FRUIT: '#EC644B',
		HEAD: '#336E7B',
		BODY: '#C8F7C5',
		BOARD: '#86B5BD'
	};

	private snake = {
		direction: this.CONTROLS.LEFT,
		parts: [
			{
				x: -1,
				y: -1
			}
		]
	};

	private fruit = {
		x: -1,
		y: -1
	};

	handleKeyboardEvents(e: KeyboardEvent) {
		if (e.keyCode == this.CONTROLS.LEFT && this.snake.direction !== this.CONTROLS.RIGHT) {
			this.tempDirection = this.CONTROLS.LEFT;
		} else if (e.keyCode == this.CONTROLS.UP && this.snake.direction !== this.CONTROLS.DOWN) {
			this.tempDirection = this.CONTROLS.UP;
		} else if (e.keyCode == this.CONTROLS.RIGHT && this.snake.direction !== this.CONTROLS.LEFT) {
			this.tempDirection = this.CONTROLS.RIGHT;
		} else if (e.keyCode == this.CONTROLS.DOWN && this.snake.direction !== this.CONTROLS.UP) {
			this.tempDirection = this.CONTROLS.DOWN;
		}
	}

	setColors(col: number, row: number): string {
		if (this.isGameOver) {
			return this.COLORS.GAME_OVER;
		} else if (this.fruit.x == row && this.fruit.y == col) {
			return this.COLORS.FRUIT;
		} else if (this.snake.parts[0].x == row && this.snake.parts[0].y == col) {
			return this.COLORS.HEAD;
		} else if (this.board[col][row] === true) {
			return this.COLORS.BODY;
		}

		return this.COLORS.BOARD;
	};

	updatePositions(): void {
		let newHead = this.repositionHead();
		let me = this;

		if (this.default_mode === 'classic') {
			if (this.boardCollision(newHead)) {
				return this.gameOver();
			}
		} else if (this.default_mode === 'no_walls') {
			this.noWallsTransition(newHead);
		}

		if (this.selfCollision(newHead)) {
			return this.gameOver();
		} else if (this.fruitCollision(newHead)) {
			this.eatFruit();
		}

		let oldTail = this.snake.parts.pop();
		this.board[oldTail.y][oldTail.x] = false;

		this.snake.parts.unshift(newHead);
		this.board[newHead.y][newHead.x] = true;

		this.snake.direction = this.tempDirection;

		setTimeout(() => {
			me.updatePositions();
		}, this.interval);
	}

	repositionHead(): any {
		let newHead = Object.assign({}, this.snake.parts[0]);

		if (this.tempDirection === this.CONTROLS.LEFT) {
			newHead.x -= 1;
		} else if (this.tempDirection === this.CONTROLS.RIGHT) {
			newHead.x += 1;
		} else if (this.tempDirection === this.CONTROLS.UP) {
			newHead.y -= 1;
		} else if (this.tempDirection === this.CONTROLS.DOWN) {
			newHead.y += 1;
		}
		return newHead;
	}

	noWallsTransition(part: any): void {
		if (part.x === this.BOARD_SIZE) {
			part.x = 0;
		} else if (part.x === -1) {
			part.x = this.BOARD_SIZE - 1;
		}

		if (part.y === this.BOARD_SIZE) {
			part.y = 0;
		} else if (part.y === -1) {
			part.y = this.BOARD_SIZE - 1;
		}
	}

	boardCollision(part: any): boolean {
		return part.x === this.BOARD_SIZE || part.x === -1 || part.y === this.BOARD_SIZE || part.y === -1;
	}

	selfCollision(part: any): boolean {
		return this.board[part.y][part.x] === true;
	}

	fruitCollision(part: any): boolean {
		return part.x === this.fruit.x && part.y === this.fruit.y;
	}

	resetFruit(): void {
		var x = Math.floor(Math.random() * this.BOARD_SIZE);
		var y = Math.floor(Math.random() * this.BOARD_SIZE);

		if (this.board[y][x] === true) {
			return this.resetFruit();
		}

		this.fruit = {
			x: x,
			y: y
		};
	}

	eatFruit(): void {
		this.score++;

		let tail = Object.assign({}, this.snake.parts[this.snake.parts.length - 1]);

		this.snake.parts.push(tail);
		this.resetFruit();

		if (this.score % 5 === 0) {
			this.interval -= 15;
		}
	}

	gameOver(): void {
		this.isGameOver = true;
		this.gameStarted = false;
		let me = this;

		if (this.score > this.best_score) {
			this.bestScoreService.store(this.score);
			this.best_score = this.score;
			this.newBestScore = true;
		}

		setTimeout(() => {
			me.isGameOver = false;
		}, 500);

		this.setBoard();
	}

	setBoard(): void {
		this.board = [];

		for (var i = 0; i < this.BOARD_SIZE; i++) {
			this.board[i] = [];
			for (var j = 0; j < this.BOARD_SIZE; j++) {
				this.board[i][j] = false;
			}
		}
	}

	showMenu(): void {
		this.showMenuChecker = !this.showMenuChecker;
	}

	newGame(mode: string): void {
		this.default_mode = mode || 'classic';
		this.showMenuChecker = false;
		this.newBestScore = false;
		this.gameStarted = true;
		this.score = 0;
		this.tempDirection = this.CONTROLS.LEFT;
		this.isGameOver = false;
		this.interval = 150;
		this.snake = {
			direction: this.CONTROLS.LEFT,
			parts: []
		};

		for (var i = 0; i < 3; i++) {
			this.snake.parts.push({ x: 8 + i, y: 8 });
		}

		this.resetFruit();
		this.updatePositions();
	}
}
