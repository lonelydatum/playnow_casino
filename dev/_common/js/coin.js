import {size, init, slicerTween, range, coinItem} from './common.js'

function coin_v1(speed=.7){
	
	const tl = init()
	
	TweenLite.defaultEase = Power3.easeOut

	
	
	

	tl.from(".t1", .4, {opacity:0}, "+=.3")

	tl.add("t1-out", "+=2.7")
	tl.to(".t1", speed, {opacity:0, y:`+=${size.h}`}, "t1-out")
	tl.to(".dragon", speed, {opacity:0, y:`+=${size.h}`}, "t1-out")


	
	
	tl.from(".screen", speed, { y:`-=${size.h}`}, "t1-out")
	tl.from(".dragon2", speed, { y:`-=${size.h}`}, "t1-out+=.3")
	tl.from(".t2", speed, { y:`-=${size.h}`})

	
	

	tl.add(slicerTween(), "+=3")

	
		
}




function coin_v2(speed=.7){
	
	const tl = init()
	
	TweenLite.defaultEase = Power3.easeOut

	
	

	tl.from(".t1", .2, {y:"-=100", opacity:0}, "+=.3")

	tl.add("t1-out", "+=2.7")
	
	tl.to(".dragon", speed, {opacity:0, y:`+=${size.h}`}, "t1-out")
	tl.to(".t1", speed, {opacity:0, y:`+=${size.h}`}, "t1-out")


	// tl.add("t2-in")
	
	tl.from(".screen", speed, { opacity:0, y:`-=${size.h}`}, "t1-out")
	tl.from(".dragon2", speed, { opacity:0, y:`-=${size.h}`}, "t1-out+=.2")

	tl.from(".t2", speed, { opacity:0, y:`-=${size.h}`}, "t1-out+=.4")

	
	tl.add("end", "+=3")

	tl.add(slicerTween(), "end")

	// tl.gotoAndPlay("f2")
		
}


export {
	coin_v1,
	coin_v2
}