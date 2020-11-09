import {size, init, slicerTween, range, coinItem} from '../../_common/js/common.js'
import {data} from '../../_common/js/88.js'


function start(){
	
	const tl = init()

	// return

	group1()	
	group2()
	

	tl.from(".t1", .6, {opacity:0, y:"-=200", ease:Power3.easeOut})
	
	tl.to(".t1", .6, {opacity:0, y:"+=300", ease:Power3.easeOut}, data.v2_t1)
	tl.to(".pot", .6, {opacity:0, y:"+=300", ease:Power3.easeOut}, data.v2_t1)
	
	tl.from([".t2"], .5, {opacity:0, y:"-=200"}, "+=0" )
	tl.from([".screen"], .3, {opacity:0}, "+=.1" )
	
	
	

	
	

	tl.add("end", `+=${data.v1_t2}`)

	tl.add(slicerTween(), "end")

	// tl.gotoAndPlay("f2")
		
}


function group1(){
	const tl = new TimelineMax()
	tl.add(coinItem(".coin_a", -60, 3), 0)
	// tl.add(coinItem(".coin_b", -30, 3), .2)
	// tl.add(coinItem(".coin_c", 70, 3), .1)
	tl.add(coinItem(".coin_d", 90, 3), .4)
}

function group2(){
	const tl = new TimelineMax()
	tl.add("t2", 3.2)
	tl.add(coinItem(".coin_a", 0, 0), "t2+=.1")
	tl.add(coinItem(".coin_b", 80, 0), "t2+=.2")
	// tl.add(coinItem(".coin_c", 150, 0), "t2+=.3")
	// tl.add(coinItem(".coin_d", 200, 0), "t2+=.4")
}

// function coinItem(id, x, repeat){
// 	const tl = new TimelineMax({repeat:repeat})	
// 	const delay = range(0, .8)
// 	const time = range(.5, .8)	
// 	tl.set(id,  {x, y:-100})
// 	tl.to(id, 1.5, {y:"+=700", rotation:"+=190",ease:Power1.easeIn})
// 	return tl
// }

start()


module.exports = {};

