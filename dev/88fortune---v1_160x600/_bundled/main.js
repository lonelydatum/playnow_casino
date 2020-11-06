(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

function start() {

	var tl = (0, _commonJsCommonJs.init)();

	// return

	group1();
	group2();

	tl.from(".t1", .6, { opacity: 0, y: "-=200", ease: Power3.easeOut });

	tl.to(".t1", .6, { opacity: 0, y: "+=400", ease: Power3.easeOut }, 2.5);

	tl.from([".t2"], .5, { opacity: 0, y: "-=200" }, "+=0");
	tl.from([".screen"], .5, { opacity: 0, y: "-=100" }, "+=.1");

	tl.add("end", "+=4");

	tl.add((0, _commonJsCommonJs.slicerTween)(), "end");

	// tl.gotoAndPlay("f2")
}

function group1() {
	var tl = new TimelineMax();
	tl.add(coinItem(".coin_a", -60, 3), 0);
	// tl.add(coinItem(".coin_b", -30, 3), .2)
	// tl.add(coinItem(".coin_c", 70, 3), .1)
	tl.add(coinItem(".coin_d", 90, 3), .4);
}

function group2() {
	var tl = new TimelineMax();
	tl.add("t2", 3.2);
	tl.add(coinItem(".coin_a", 0, 0), "t2+=.1");
	tl.add(coinItem(".coin_b", 80, 0), "t2+=.2");
	// tl.add(coinItem(".coin_c", 150, 0), "t2+=.3")
	// tl.add(coinItem(".coin_d", 200, 0), "t2+=.4")
}

function coinItem(id, x, repeat) {
	var tl = new TimelineMax({ repeat: repeat });
	var delay = (0, _commonJsCommonJs.range)(0, .8);
	var time = (0, _commonJsCommonJs.range)(.5, .8);
	tl.set(id, { x: x, y: -100 });
	tl.to(id, 1, { y: "+=700", rotation: "+=190", ease: Power1.easeIn });
	return tl;
}

start();

module.exports = {};

},{"../../_common/js/common.js":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power3.easeInOut;

function bgExitHandler(e) {
	Enabler.exit('Background Exit');
}

document.getElementById('banner').addEventListener('click', bgExitHandler, false);

function slicerSet() {

	var h = size.h;
	var w = size.w / 3;

	TweenLite.set('.f1.a', { clip: 'rect(0px,' + w + 'px,' + h + 'px, ' + (w * 1 - w) + 'px)' });
	TweenLite.set('.f1.b', { clip: 'rect(0px,' + w * 2 + 'px,' + h + 'px,' + (w * 2 - w) + 'px)' });
	TweenLite.set('.f1.c', { clip: 'rect(0px,' + w * 3 + 'px,' + h + 'px,' + (w * 3 - w) + 'px)' });

	var h_ = h * 2;
	var w_ = w * 2;
	console.log(w_, h_);
	TweenLite.set('.f2.a', { clip: 'rect(0px,' + w_ + 'px,' + h_ + 'px, ' + (w_ * 1 - w_) + 'px)', y: -h });
	TweenLite.set('.f2.b', { clip: 'rect(0px,' + w_ * 2 + 'px,' + h_ + 'px,' + (w_ * 2 - w_) + 'px)', y: -h });
	TweenLite.set('.f2.c', { clip: 'rect(0px,' + w_ * 3 + 'px,' + h_ + 'px,' + (w_ * 3 - w_) + 'px)', y: -h });
}

function range(min, max) {
	var diff = max - min;
	var res = Math.random() * diff + min;
	return res;
}

function slicerTween() {
	TweenLite.set(".shad", { opacity: 1 });
	var tl = new TimelineMax();
	tl.set([".f1", ".f2"], { opacity: 1 });

	var time = size.h / 450;
	time = Math.max(time, .4);

	// const time = 5
	tl.to([".a"], time, { y: '+=' + size.h }, 0);
	tl.to([".b"], time, { y: '+=' + size.h }, .2);
	tl.to([".c"], time, { y: '+=' + size.h }, .3);

	tl.to(".shad", .5, { opacity: 0 }, "+=.15");
	return tl;
}

function init() {
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });
	var w_ = size.w / 3;
	var y = -size.h;
	tl.set(".shad1", { x: w_ * 0, y: y });
	tl.set(".shad2", { x: w_ * 1, y: y });
	tl.set(".shad3", { x: w_ * 2, y: y });

	// tl.set(".shad", {opacity:0})
	setTimeout(function () {
		slicerSet();
		// slicerSet('f2')
	}, 2000);
	return tl;
}

exports.size = size;
exports.range = range;
exports.slicerTween = slicerTween;
exports.init = init;

},{}]},{},[1])


//# sourceMappingURL=main.js.map
