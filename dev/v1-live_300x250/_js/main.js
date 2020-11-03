import {size, slicerSet, slicerTween} from '../../_common/js/common.js'

function range(min, max) {
	const diff = max-min
	const res = (Math.random()*diff) + min
	return res
}

function start(){
	TweenLite.defaultEase = Power3.easeOut

	slicerSet("f1")
	slicerSet("f2")

	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	tl.from(".t1", .3, {opacity:0}, "+=.5")

	tl.add("wipe", "+=3")
	tl.set(".wiper", {className:"+=wiperOn"}, "wipe")
	tl.set(".line", {className:"+=lineOn"}, "wipe")

	tl.add(slicerTween(), "+=4")

	// tl.gotoAndPlay("f2")
		
}

start()


module.exports = {};

