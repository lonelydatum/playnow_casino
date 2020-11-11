(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
	TweenLite.set('.shadMain', { height: "200%", opacity: 0 });
	TweenLite.set('.f2.a', { clip: 'rect(0px,' + w + 'px,' + h + 'px, ' + (w * 1 - w) + 'px)', y: -h });
	TweenLite.set('.f2.b', { clip: 'rect(0px,' + w * 2 + 'px,' + h + 'px,' + (w * 2 - w) + 'px)', y: -h });
	TweenLite.set('.f2.c', { clip: 'rect(0px,' + w * 3 + 'px,' + h + 'px,' + (w * 3 - w) + 'px)', y: -h });
}

function range(min, max) {
	var diff = max - min;
	var res = Math.random() * diff + min;
	return res;
}

function slicerTween() {

	TweenLite.set(".shad", { opacity: 1 });

	var tl = new TimelineMax();
	console.log(size.h);

	tl.set([".f1", ".f2"], { opacity: 1 });
	tl.to('.shadMain', .3, { opacity: 1, ease: Power2.easeIn });

	var time = size.h / 450;

	time = Math.max(time, .4);

	// time = 10

	tl.to([".a"], time, { y: '+=' + size.h }, 0);
	tl.to([".b"], time, { y: '+=' + size.h }, .2);
	tl.to([".c"], time, { y: '+=' + size.h }, .4);

	// const time = 10
	// tl.to(".a", time, {y:`+=${size.h}`}, 0)
	// tl.to(".b", time, {y:`+=${size.h}`}, 0)
	// tl.to(".c", time, {y:`+=${size.h}`}, 0)

	tl.to(".shad", .2, { opacity: 0, ease: Power2.easeIn }, "+=0");
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
		// slicerSet()
		// slicerSet('f2')
	}, 2000);
	slicerSet();
	return tl;
}

function coinItem(id, x, repeat) {
	console.log(repeat);
	var tl = new TimelineMax({ repeat: repeat });
	var delay = range(0, .8);
	// const time = range(.5, .8)	
	tl.set(id, { x: x, y: -100 });
	var height = size.h;
	var time = height / 500;

	time = Math.max(time, .7);
	time = Math.min(time, 1);

	// tl.set(id, {scale:range(.25, .5)})
	tl.to(id, time, { y: height, rotation: '+=500}', ease: Power1.easeIn });
	return tl;
}

exports.coinItem = coinItem;
exports.size = size;
exports.range = range;
exports.slicerTween = slicerTween;
exports.init = init;

},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _commonJs = require('./common.js');

var time_v1 = 1;

function wof_v2(list) {

	var tl = (0, _commonJs.init)();
	tl.to(".wheel", 2, { rotation: "-=500", ease: Back.easeInOut }, 3);
	tl.add(flip(list), "-=.3");

	tl.add("end", "+=2.2");

	tl.add((0, _commonJs.slicerTween)(), "end");
}

function wof_v1(list) {

	var tl = (0, _commonJs.init)();
	tl.add(flip(list), 1);
	tl.to(".wheel", 2, { rotation: "-=500", ease: Back.easeInOut });

	tl.add((0, _commonJs.slicerTween)(), "+=1");
}

function flip(list) {
	var tl = new TimelineMax();
	for (var i = 0; i < list.length; i++) {
		tl.to(list[i], .3, { rotationY: "+=180" }, "-=.21");
	}

	return tl;
}

exports.wof_v1 = wof_v1;
exports.wof_v2 = wof_v2;
exports.time_v1 = time_v1;

},{"./common.js":1}],3:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

function start() {

	var tl = (0, _commonJsCommonJs.init)();

	var list = ["#how_1 .flip-card-inner", "#do_1 .flip-card-inner", "#you_1 .flip-card-inner", "#you_2 .flip-card-inner", "#spell_1 .flip-card-inner", "#fun_1 .flip-card-inner"];

	var _require = require('../../_common/js/wof.js');

	var wof_v1 = _require.wof_v1;

	wof_v1(list);
}

start();

module.exports = {};

},{"../../_common/js/common.js":1,"../../_common/js/wof.js":2}]},{},[3])


//# sourceMappingURL=main.js.map
