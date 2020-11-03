import {size, init, slicerTween} from '../../_common/js/common.js'



function start(){
	
	const tl = init()
	

	const speed = .6

	tl.from(".t1", .4, {opacity:0}, "+=.3")

	tl.add("t1-out", "+=2.7")
	tl.to(".t1", speed, {opacity:0, x:"+=300"}, "t1-out")
	tl.to(".dragon", speed, {opacity:0, x:"+=300"}, "t1-out+=.2")


	tl.add("t2-in")
	tl.from(".t2", speed, {opacity:0, x:"-=300"}, "t1-out")
	tl.from(".screen", speed, {opacity:0, x:"-=300"}, "t1-out")
	tl.from(".dragon2", speed, {opacity:0, x:"-=300"}, "t1-out")

	
	tl.add("end", "+=3")

	tl.add(slicerTween(), "end")

	// tl.gotoAndPlay("f2")
		
}

start()


module.exports = {};

