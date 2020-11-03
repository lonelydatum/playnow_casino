import {size, slicerSet, slicerTween} from '../../_common/js/common.js'

function range(min, max) {
	const diff = max-min
	const res = (Math.random()*diff) + min
	return res
}

function start(){
	TweenLite.defaultEase = Power3.easeOut
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	
	

	
	
	slicerSet('f1')
	slicerSet('f2')

	group1()	
	group2()
	

	tl.from(".t1", .6, {opacity:0, y:"-=100", ease:Power3.easeOut})
	
	tl.to(".t1", .6, {opacity:0, y:"+=200", ease:Power3.easeOut}, 2.5)
	
	tl.from([".t2"], .5, {opacity:0, y:"-=100"}, "+=0" )
	tl.from([".screen"], .5, {opacity:0, y:"-=100"}, "+=.1" )
	
	
	

	
	

	tl.add("end", "+=4")

	tl.add(slicerTween(), "end")

	// tl.gotoAndPlay("f2")
		
}


function group1(){
	const tl = new TimelineMax()
	tl.add(coinItem(".coin_a", -60), 0)
	tl.add(coinItem(".coin_b", -30), .2)
	tl.add(coinItem(".coin_c", 210), .1)
	tl.add(coinItem(".coin_d", 230), .4)
}

function group2(){
	const tl = new TimelineMax()
	tl.add("t2", 3.2)
	tl.add(coinItem(".coin_a", 100), "t2+=.1")
	tl.add(coinItem(".coin_b", 130), "t2+=.2")
	tl.add(coinItem(".coin_c", 180), "t2+=.3")
	tl.add(coinItem(".coin_d", 200), "t2+=.4")
}

function coinItem(id, x){
	const tl = new TimelineMax({repeat:3})	
	const delay = range(0, .8)
	const time = range(.5, .8)	
	tl.set(id,  {x, y:-100})
	tl.to(id, .7, {y:"+=340", rotation:"+=190",ease:Power1.easeIn})
	return tl
}

start()


module.exports = {};

