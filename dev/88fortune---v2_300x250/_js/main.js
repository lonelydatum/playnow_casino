import {size, init, slicerTween, range, coinItem} from '../../_common/js/common.js'
import {data} from '../../_common/js/88.js'


function start(){
	
	const tl = init()

	group1()	
	group2()

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



function group1(){
	const tl = new TimelineMax()
	tl.add(coinItem(".coin_a", -60, 3), 0)
	tl.add(coinItem(".coin_b", -30, 3), .2)
	tl.add(coinItem(".coin_c", 0, 3), .4)
	tl.add(coinItem(".coin_d", 50, 3), .3)
}

function group2(){
	const tl = new TimelineMax()
	tl.add("t2", 3.2)
	tl.add(coinItem(".coin_a", 100, 2), "t2+=.1")
	tl.add(coinItem(".coin_b", 130, 2), "t2+=.2")
	tl.add(coinItem(".coin_c", 180, 2), "t2+=.3")
	tl.add(coinItem(".coin_d", 200, 2), "t2+=.4")
}


start()

module.exports = {};

