import {size, init, slicerTween, range} from '../../_common/js/common.js'



function start(){
	
	const tl = init()

	TweenLite.defaultEase = Power3.easeOut
	
	// return

	tl.from(".t1", .4, {opacity:0, x:"-=300"})
	
	tl.from(".pot", .4, {x:"-=300"})
	
	tl.add("t1-out", 2.5)
	tl.to(".t1", .6, {x:"+=300"}, "t1-out")	
	tl.to(".pot", .6, {x:300, opacity:0}, "t1-out")
	tl.from(".screen", .5, {x:"-=500"}, "t1-out+=.2" )
	tl.from(".t2", .5, {x:"-=400"}, "t1-out+=.4" )
	
	
	

	
	

	tl.add("end", "+=4")
	tl.add(slicerTween(), "end")

	// tl.gotoAndPlay("f2")
		
}

start()

module.exports = {};

