# ngx-Snake

[![build-url][build-url-svg]][build-url]
[![Dependencies][dependencies]][dependencies-url]
[![Dev Dependencies][dev-dependencies]][dev-dependencies-url]

> ngx-Snake is simple Snake arcade game implemented in Angular 7 (latest 7.1.4)

#### Demo (Updated: 06/01/2019)

https://samirhodzic.github.io/ngx-snake/ 

#### Controls

UP, DOWN, LEFT, RIGHT - to control snake

## Setup

**Note**: Require Node 4+ together with Npm 3+, also be sure to install [Angular-CLI](https://github.com/angular/angular-cli) (latest 7.1.4)

```bash
$ npm install -g @angular/cli@latest
```

Clone this repo in your favourite shell:

```bash
$ git clone https://github.com/SamirHodzic/ngx-snake.git
```

Install the npm packages described in the package.json:

```bash
$ npm install
```
Transpile typescript into javascript, host the app and monitor the changes: 

```bash
$ ng serve
```

Visit http://localhost:4200 and play!

## TODO
* ~~Save Best Score~~
* Multiple modes
	* ~~Classic~~
	* ~~No Walls~~
	* ~~Obstacles~~
	* Multiple Fruits
* Update UI
	* ~~Make it responsive~~
	* Introduce controls for mobile devices
* Write tests
* ...

[dependencies]: https://david-dm.org/samirhodzic/ngx-snake.svg
[dependencies-url]: https://david-dm.org/samirhodzic/ngx-snake
[dev-dependencies]: https://david-dm.org/samirhodzic/ngx-snake/dev-status.svg
[dev-dependencies-url]: https://david-dm.org/samirhodzic/ngx-snake?type=dev
[build-url]: https://travis-ci.org/SamirHodzic/ngx-snake
[build-url-svg]: https://travis-ci.org/SamirHodzic/ngx-snake.svg?branch=master
