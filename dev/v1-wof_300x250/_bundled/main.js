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
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

function range(min, max) {
	var diff = max - min;
	var res = Math.random() * diff + min;
	return res;
}

function start() {

	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });

	var time = .3;

	tl.to("#how_1 .flip-card-inner", time, { rotationY: "+=180" });
	tl.to("#do_1 .flip-card-inner", time, { rotationY: "+=180" });
	tl.to("#you_1 .flip-card-inner", time, { rotationY: "+=180" });
	tl.to("#you_2 .flip-card-inner", time, { rotationY: "+=180" });
	tl.to("#spell_1 .flip-card-inner", time, { rotationY: "+=180" });
	tl.to("#exite_1 .flip-card-inner", time, { rotationY: "+=180" });
	tl.to("#exite_2 .flip-card-inner", time, { rotationY: "+=180" });
	tl.to("#exite_3 .flip-card-inner", time, { rotationY: "+=180" });
	tl.to("#exite_4 .flip-card-inner", time, { rotationY: "+=180" });

	(0, _commonJsCommonJs.slicerSet)('f1');
	(0, _commonJsCommonJs.slicerSet)('f2');

	var speed = .6;

	tl.add("end", "+=.5");

	tl.add((0, _commonJsCommonJs.slicerTween)(), "end");

	// tl.gotoAndPlay("f2")
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
