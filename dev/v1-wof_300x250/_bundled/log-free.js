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

function slicerSet(frame) {
	var el = document.getElementById(frame);
	var w = el.offsetWidth;
	var h = el.offsetHeight;

	var w_ = w / 3;
	TweenLite.set('.' + frame + '.a', { clip: 'rect(0px,' + w_ + 'px,' + h + 'px, ' + (w_ * 1 - w_) + 'px)' });
	TweenLite.set('.' + frame + '.b', { clip: 'rect(0px,' + w_ * 2 + 'px,' + h + 'px,' + (w_ * 2 - w_) + 'px)' });
	TweenLite.set('.' + frame + '.c', { clip: 'rect(0px,' + w_ * 3 + 'px,' + h + 'px,' + (w_ * 3 - w_) + 'px)' });
}

function range(min, max) {
	var diff = max - min;
	var res = Math.random() * diff + min;
	return res;
}

function slicerTween() {

	var tl = new TimelineMax();
	tl.set([".f1", ".f2"], { opacity: 1 });
	var time = 175 / size.h;
	tl.to([".a"], time, { y: '+=' + size.h }, 0);
	tl.to([".b"], time, { y: '+=' + size.h }, .2);
	tl.to([".c"], time, { y: '+=' + size.h }, .3);

	tl.to(".shad", .5, { opacity: 0 });
	return tl;
}

function init() {
	var tl = new TimelineMax();
	tl.set(".frame1", { opacity: 1 });
	setTimeout(function () {
		slicerSet('f1');
		slicerSet('f2');
	}, 2000);
	return tl;
}

exports.size = size;
exports.range = range;
exports.slicerTween = slicerTween;
exports.init = init;

},{}],2:[function(require,module,exports){
"use strict";

var _commonJsCommonJs = require('../../_common/js/common.js');

function start() {

	var tl = (0, _commonJsCommonJs.init)();

	var list = ["#how_1 .flip-card-inner", "#do_1 .flip-card-inner", "#you_1 .flip-card-inner", "#you_2 .flip-card-inner", "#spell_1 .flip-card-inner", "#exite_1 .flip-card-inner", "#exite_2 .flip-card-inner", "#exite_3 .flip-card-inner", "#exite_4 .flip-card-inner"];

	tl.add(wof(list), 1);

	tl.add("end", "+=3");

	tl.add((0, _commonJsCommonJs.slicerTween)(), "end");
}

function wof(list) {
	var tl = new TimelineMax();
	for (var i = 0; i < list.length; i++) {
		tl.to(list[i], .3, { rotationY: "+=180" }, "-=.15");
	}

	return tl;
}

start();

module.exports = {};

},{"../../_common/js/common.js":1}]},{},[2])


//# sourceMappingURL=main.js.map
