jQuery Carousel
======

simple Carousel with jQuery

### Demo & Example

<https://albert-cyberhulk.github.io/jQuery-Carousel/>

### Getting Started
Clone a Git repository using the command line.

### Installation

#### Add jQuery Carousel to your project

npm
````bash
npm install jquery-carousel --save
````
or

bower
````bash
bower install jquery-carousel --save
````

add it to your HTML file
````bash
<script src="bower_components/jquery-carousel/dist/jquery-carousel.min.js"></script>
````

#### Install jQuery Carousel

The built version of jquery-carousel will be put in the dist/ directory, along with the minified copy.

Install npm node module
````bash
npm install
````

Install bower node module
````bash
bower install
````

Install Grunt cli as a global node module
````bash
npm install -g grunt-cli
````

To run dev server type in
````bash
grunt serve
````

To run unit tests type in
````bash
grunt test
````

To build production ready version type in
````bash
grunt build
````

### Dependencies
- jQuery: [JavaScript library](https://jquery.com/)

### Usage
You can change default data like this
````javascript
$.fn.ccCarousel.defaults = {
    clickTimer: 250, //setTimeout for click
    hoverTimer: 7000, //setTimeout for hover
    imageWidth: 330
}

$.fn.ccCarousel.defaults.clickTimer = 800;
````

There are 3 public methods for  jQuery Carousel plugin slider
- moveToLeft: slider moves to the left
- moveToRight: slider moves to the right
- stop: slider stops

### License

This plugin is available under [the MIT license](http://mths.be/mit).
