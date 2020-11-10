import {size, init, slicerTween, range, coinItem} from './common.js'

function coin_v1(){
	
	const tl = init()
	
	TweenLite.defaultEase = Power3.easeOut

	const speed = .7
	
	

	tl.from(".t1", .4, {opacity:0}, "+=.3")

	tl.add("t1-out", "+=2.7")
	tl.to(".t1", speed, {opacity:0, y:`+=${size.h}`}, "t1-out")
	tl.to(".dragon", speed, {opacity:0, y:`+=${size.h}`}, "t1-out")


	
	
	tl.from(".screen", speed, { y:`-=${size.h}`}, "t1-out")
	tl.from(".dragon2", speed, { y:`-=${size.h}`}, "t1-out+=.3")
	tl.from(".t2", speed, { y:`-=${size.h}`})

	
	

	tl.add(slicerTween(), "+=3")

	
		
}

export {
	coin_v1
}