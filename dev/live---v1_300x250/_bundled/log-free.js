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
	void 0;
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
	void 0;

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
	void 0;
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

function live_1() {

	var tl = (0, _commonJs.init)();
	// tl.set(".bg2", {x:-size.w*.5, y:size.h, scale:.43 })
	tl.set(".bg2", { x: _commonJs.size.w, y: -_commonJs.size.h * .5, scale: .43 });

	tl.from(".t1a", .3, { opacity: 0 }, "+=.3");
	tl.from(".t1b", .3, { opacity: 0 }, "+=.5");

	tl.from(".gold", .3, { x: _commonJs.size.w, ease: Power4.easeOut }, "+=2");
	tl.to(".bg2", .3, { x: -_commonJs.size.w * .5, ease: Power4.easeOut }, "+=.1");
	tl.to(".bg2", .4, { scale: .5, ease: Back.easeOut }, "+=.1");
	tl.from(".t2", .4, { opacity: 0 }, "+=.1");

	tl.add((0, _commonJs.slicerTween)(), "+=4");
}

function live_1_landscape() {

	var tl = (0, _commonJs.init)();
	tl.set(".bg2", { x: -_commonJs.size.w * .5, y: _commonJs.size.h, scale: .43 });

	tl.from(".t1a", .3, { opacity: 0 }, "+=.3");
	tl.from(".t1b", .3, { opacity: 0 }, "+=.5");

	tl.from(".gold", .3, { y: _commonJs.size.h, ease: Power4.easeOut }, "+=2");
	tl.to(".bg2", .3, { y: -_commonJs.size.h * .5, ease: Power4.easeOut }, "+=.1");
	tl.to(".bg2", .4, { scale: .5, ease: Back.easeOut }, "+=.1");
	tl.from(".t2", .4, { opacity: 0 }, "+=.1");
	tl.add((0, _commonJs.slicerTween)(), "+=4");
}

function live_2_landscape() {

	var tl = (0, _commonJs.init)();
	tl.set(".bg2", { x: -_commonJs.size.w * .5, y: _commonJs.size.h, scale: .43 });

	tl.from(".t1", .3, { opacity: 0 }, "+=.3");

	tl.from(".gold", .3, { y: _commonJs.size.h, ease: Power4.easeOut }, "+=2");
	tl.to(".bg2", .3, { y: -_commonJs.size.h * .5, ease: Power4.easeOut }, "+=.1");
	tl.to(".bg2", .4, { scale: .5, ease: Back.easeOut }, "+=.1");
	tl.from(".t2", .4, { opacity: 0 }, "+=.1");
	tl.add((0, _commonJs.slicerTween)(), "+=2");
}

function live_2() {

	var tl = (0, _commonJs.init)();
	tl.set(".bg2", { x: _commonJs.size.w, y: -_commonJs.size.h * .5, scale: .43 });
	tl.from(".t1", .3, { opacity: 0 }, "+=.3");

	tl.from(".gold", .3, { x: _commonJs.size.w, ease: Power4.easeOut }, "+=3");
	tl.to(".bg2", .3, { x: -_commonJs.size.w * .5, ease: Power4.easeOut }, "+=.1");
	tl.to(".bg2", .4, { scale: .5, ease: Back.easeOut }, "+=.1");
	tl.from(".t2", .4, { opacity: 0 }, "+=.1");
	tl.add((0, _commonJs.slicerTween)(), "+=2");
}

exports.live_2 = live_2;
exports.live_1 = live_1;
exports.live_2_landscape = live_2_landscape;
exports.live_1_landscape = live_1_landscape;

},{"./common.js":1}],3:[function(require,module,exports){
'use strict';

var _commonJsCommonJs = require('../../_common/js/common.js');

var _commonJsLiveJs = require('../../_common/js/live.js');

(0, _commonJsLiveJs.live_1)();

module.exports = {};

},{"../../_common/js/common.js":1,"../../_common/js/live.js":2}]},{},[3])


//# sourceMappingURL=main.js.map
