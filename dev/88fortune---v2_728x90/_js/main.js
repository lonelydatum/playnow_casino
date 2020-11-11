import {size, init, slicerTween, range, coinItem} from '../../_common/js/common.js'
import {data} from '../../_common/js/88.js'


function start(){
	
	const tl = init()

	// return

	group1()	
	group2()
	

	tl.from(".t1", .6, {opacity:0, y:"-=100", ease:Power3.easeOut})
	
	tl.to(".t1", .6, {opacity:0, y:"+=200", ease:Power3.easeOut}, data.v2_t1)
	tl.to(".pot", .6, {opacity:0, y:"+=200", ease:Power3.easeOut}, data.v2_t1)

	tl.from([".t2"], .5, {opacity:0, y:"-=100"}, "+=0" )
	tl.from([".screen"], .5, {opacity:0, y:"-=100"}, "+=.1" )
	
	
	

	
	

	tl.add("end", `+=${data.v2_t2}`)

	tl.add(slicerTween(), "end")

	// tl.gotoAndPlay("f2")
		
}


function group1(){
	const tl = new TimelineMax()
	
	tl.add(coinItem(".coin_a", 350, 3), "t2+=.1")
	tl.add(coinItem(".coin_b", 400, 3), "t2+=.2")
	tl.add(coinItem(".coin_c", 500, 3), "t2+=.3")
	tl.add(coinItem(".coin_d", 600, 3), "t2+=.4")
}

function group2(){
	const tl = new TimelineMax()
	tl.add("t2", 3.2)
	tl.add(coinItem(".coin_a", 450, 3), "t2+=.1")
	tl.add(coinItem(".coin_b", 510, 3), "t2+=.2")
	tl.add(coinItem(".coin_c", 560, 3), "t2+=.3")
	
}

// function coinItem(id, x, repeat){
// 	const tl = new TimelineMax({repeat:repeat})	
// 	const delay = range(0, .8)
// 	const time = range(.5, .8)	
// 	tl.set(id,  {x, y:-100})
// 	tl.to(id, .6, {y:`+=${range(170, 220)}`, rotation:`+=${range(200, 400)}`,ease:Power1.easeIn})
// 	return tl
// }

start()


module.exports = {};

