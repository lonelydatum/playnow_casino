import {size, init, slicerTween, range, coinItem} from '../../_common/js/common.js'
import {data} from '../../_common/js/88.js'


function start(){
	
	const tl = init()

	TweenLite.defaultEase = Power3.easeOut
	
	// return
	tl.from(".pot", .4, {y:`-=${size.h}`})
	tl.from(".t1", .4, {opacity:0, y:`-=${size.h}`})
	
	
	
	tl.add("t1-out", data.v2_t1)
	tl.to(".t1", .6, {y:`+=${size.h}`}, "t1-out")	
	tl.to(".pot", .6, {y:`+=${size.h}`, opacity:0}, "t1-out")
	tl.from(".screen", .5, {y:`-=${size.h}`}, "t1-out+=.2" )
	tl.from(".t2", .5, {y:`-=${size.h}`}, "t1-out+=.4" )
	
	
	

	
	

	tl.add("end", `+=${data.v1_t2}`)
	tl.add(slicerTween(), "end")

	// tl.gotoAndPlay("f2")
		
}

start()

module.exports = {};

