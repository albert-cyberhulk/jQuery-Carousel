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
or
````bash
<script src="node_modules/jquery-carousel/dist/jquery-carousel.min.js"></script>
````

#### Install jQuery Carousel

The built version of jquery-carousel will be put in the dist/ directory, along with the minified copy.

Install npm packages
````bash
npm install
````

Install bower packages
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
You can change default settings
````javascript
$.fn.ccCarousel.defaults = {
    clickTimer: 500, //setTimeout for click
    hoverTimer: 6000, //setTimeout for hover
    imageWidth: 330
}
````

There are 3 public methods for  jQuery Carousel plugin slider
- moveToLeft: moves slider to left
- moveToRight: moves slider to right
- stop: stops the slider

### License

This plugin is available under [the MIT license](http://mths.be/mit).
