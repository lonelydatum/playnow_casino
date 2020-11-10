import {size, init, slicerTween, range, coinItem} from '../../_common/js/common.js'



function start(){
	
	const tl = init()
	
	TweenLite.defaultEase = Power3.easeOut

	// return
	group1()
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


function group1(){
	const tl = new TimelineMax()
	tl.add(coinItem(".coin_a", -60, 3), 0)
	tl.add(coinItem(".coin_b", -30, 3), .2)
	tl.add(coinItem(".coin_c", 210, 3), .1)
	tl.add(coinItem(".coin_d", 230, 3), .4)
}

function group2(){
	const tl = new TimelineMax()
	tl.add("t2", 3.2)
	tl.add(coinItem(".coin_a", 100, 1), "t2+=.1")
	tl.add(coinItem(".coin_b", 130, 1), "t2+=.2")
	tl.add(coinItem(".coin_c", 180, 1), "t2+=.3")
	tl.add(coinItem(".coin_d", 200, 1), "t2+=.4")
}

start()


module.exports = {};

