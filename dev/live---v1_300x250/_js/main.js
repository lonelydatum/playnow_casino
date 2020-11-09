import {size, init, slicerTween} from '../../_common/js/common.js'



function start(){
	
	const tl = init()
	
	


	tl.from(".t1a", .3, {opacity:0}, "+=.3")
	tl.from(".t1b", .3, {opacity:0}, "+=.5")
	

	tl.from(".gold", .3, {x:size.w, ease:Power4.easeOut}, "+=2")
	tl.from(".bg2", .3, {x:size.w, ease:Power4.easeOut}, "+=.1")
	tl.to(".bg2", .4, {scale:.5, ease:Back.easeOut}, "+=.1")
	

	
	

	

	tl.add(slicerTween(), "+=4")

	
		
}

start()


module.exports = {};

