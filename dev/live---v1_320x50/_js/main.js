import {size, init, slicerTween} from '../../_common/js/common.js'

// import {live_1} from '../../_common/js/live.js'




function start(){

	const tl = init()
	tl.set(".bg2", {x:-size.w*.5, y:size.h, scale:.43 })
	
	
	tl.from(".t1a", .3, {opacity:0}, "+=.3")
	tl.from(".t1b", .3, {opacity:0}, "+=.5")
	

	tl.from(".gold", .3, {y:size.h, ease:Power4.easeOut}, "+=2")
	tl.to(".bg2", .3, {y:-size.h*.5, ease:Power4.easeOut}, "+=.1")
	tl.to(".bg2", .4, {scale:.5, ease:Back.easeOut}, "+=.1")
	tl.from(".t2", .4, {opacity:0}, "+=.1")
	

	
	

	

	tl.add(slicerTween(), "+=4")
}



start()


module.exports = {};

