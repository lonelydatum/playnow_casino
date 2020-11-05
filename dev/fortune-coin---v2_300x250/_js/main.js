import {size, init, slicerTween} from '../../_common/js/common.js'



function start(){
	
	const tl = init()
	
	TweenLite.defaultEase = Power3.easeOut

	// return
	
	const speed = .7

	tl.from(".t1", .2, {y:"-=100", opacity:0}, "+=.3")

	tl.add("t1-out", "+=2.7")
	
	tl.to(".dragon", speed, {opacity:0, y:"+=300"}, "t1-out")
	tl.to(".t1", speed, {opacity:0, y:"+=300"}, "t1-out")


	// tl.add("t2-in")
	
	tl.from(".screen", speed, { opacity:0, y:"-=300"}, "t1-out")
	tl.from(".dragon2", speed, { opacity:0, y:"-=300"}, "t1-out+=.2")

	tl.from(".t2", speed, { opacity:0, y:"-=300"}, "t1-out+=.4")

	
	tl.add("end", "+=3")

	tl.add(slicerTween(), "end")

	// tl.gotoAndPlay("f2")
		
}

start()


module.exports = {};

