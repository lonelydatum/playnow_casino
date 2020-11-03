(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var banner = document.getElementById('banner');
var size = { w: banner.offsetWidth, h: banner.offsetHeight };

TweenLite.defaultEase = Power3.easeInOut;

function slicerSet(frame) {
	var el = document.getElementById(frame);
	var w = el.offsetWidth;
	var h = el.offsetHeight;

	var w_ = w / 3;
	TweenLite.set("." + frame + ".a", { clip: "rect(0px," + w_ + "px," + h + "px, " + (w_ * 1 - w_) + "px)" });
	TweenLite.set("." + frame + ".b", { clip: "rect(0px," + w_ * 2 + "px," + h + "px," + (w_ * 2 - w_) + "px)" });
	TweenLite.set("." + frame + ".c", { clip: "rect(0px," + w_ * 3 + "px," + h + "px," + (w_ * 3 - w_) + "px)" });
}

function slicerTween() {

	var tl = new TimelineMax();
	tl.set([".f1", ".f2"], { opacity: 1 });
	var time = 1;
	tl.to([".a"], time, { y: "+=" + size.h }, 0);
	tl.to([".b"], time, { y: "+=" + size.h }, .2);
	tl.to([".c"], time, { y: "+=" + size.h }, .3);

	tl.to(".shad", .5, { opacity: 0 });
	return tl;
}

exports.size = size;
exports.slicerSet = slicerSet;
exports.slicerTween = slicerTween;

},{}],2:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

function range(min, max) {
	var diff = max - min;
	var res = Math.random() * diff + min;
	return res;
}

function start() {
	TweenLite.defaultEase = Power3.easeOut;
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	(0, _commonJsCommonJs.slicerSet)('f1');
	(0, _commonJsCommonJs.slicerSet)('f2');

	group1();
	group2();

	tl.from(".t1", .6, { opacity: 0, y: "-=100", ease: Power3.easeOut });

	tl.to(".t1", .6, { opacity: 0, y: "+=200", ease: Power3.easeOut }, 2.5);

	tl.from([".t2"], .5, { opacity: 0, y: "-=100" }, "+=0");
	tl.from([".screen"], .5, { opacity: 0, y: "-=100" }, "+=.1");

	tl.add("end", "+=4");

	tl.add((0, _commonJsCommonJs.slicerTween)(), "end");

	// tl.gotoAndPlay("f2")
}

function group1() {
	var tl = new TimelineMax();
	tl.add(coinItem(".coin_a", -60), 0);
	tl.add(coinItem(".coin_b", -30), .2);
	tl.add(coinItem(".coin_c", 210), .1);
	tl.add(coinItem(".coin_d", 230), .4);
}

function group2() {
	var tl = new TimelineMax();
	tl.add("t2", 3.2);
	tl.add(coinItem(".coin_a", 100), "t2+=.1");
	tl.add(coinItem(".coin_b", 130), "t2+=.2");
	tl.add(coinItem(".coin_c", 180), "t2+=.3");
	tl.add(coinItem(".coin_d", 200), "t2+=.4");
}

function coinItem(id, x) {
	var tl = new TimelineMax({ repeat: 3 });
	var delay = range(0, .8);
	var time = range(.5, .8);
	tl.set(id, { x: x, y: -100 });
	tl.to(id, .7, { y: "+=340", rotation: "+=190", ease: Power1.easeIn });
	return tl;
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
