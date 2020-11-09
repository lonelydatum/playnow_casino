import {size, init, slicerTween, range, coinItem} from '../../_common/js/common.js'
import {data} from '../../_common/js/88.js'



function start(){
	
	const tl = init()

	

	group1()	
	// group2()
	

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
	tl.add(coinItem(".coin_a", -30, 5), 0)
	tl.add(coinItem(".coin_b", -60, 5), .2)
	tl.add(coinItem(".coin_c", 220, 5), .3)
	tl.add(coinItem(".coin_d", 240, 5), .6)
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
// 	const y = range(700, 760)	
// 	tl.set(id,  {x, y:-100})
// 	tl.to(id, 1, {y:`+=${y}`, rotation:"+=190",ease:Power1.easeIn})
// 	return tl
// }

start()


module.exports = {};

