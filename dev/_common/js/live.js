import {size, init, slicerTween} from './common.js'


const time_v1 = 1



function live_1(){

	const tl = init()
	// tl.set(".bg2", {x:-size.w*.5, y:size.h, scale:.43 })
	tl.set(".bg2", {x:size.w, y:-size.h*.5, scale:.43 })
		
	tl.from(".t1a", .3, {opacity:0}, "+=.3")
	tl.from(".t1b", .3, {opacity:0}, "+=.5")
	
	tl.from(".gold", .3, {x:size.w, ease:Power4.easeOut}, "+=2")
	tl.to(".bg2", .3, {x:-size.w*.5, ease:Power4.easeOut}, "+=.1")
	tl.to(".bg2", .4, {scale:.5, ease:Back.easeOut}, "+=.1")
	tl.from(".t2", .4, {opacity:0}, "+=.1")

	tl.add(slicerTween(), "+=4")
}


function live_1_landscape(){

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


function live_2_landscape(){

	const tl = init()
	tl.set(".bg2", {x:-size.w*.5, y:size.h, scale:.43 })
	
	
	tl.from(".t1", .3, {opacity:0}, "+=.3")
	
	
	tl.from(".gold", .3, {y:size.h, ease:Power4.easeOut}, "+=2")
	tl.to(".bg2", .3, {y:-size.h*.5, ease:Power4.easeOut}, "+=.1")
	tl.to(".bg2", .4, {scale:.5, ease:Back.easeOut}, "+=.1")
	tl.from(".t2", .4, {opacity:0}, "+=.1")
	tl.add(slicerTween(), "+=2")
}



function live_2(){

	const tl = init()
	tl.set(".bg2", {x:size.w, y:-size.h*.5, scale:.43 })
	tl.from(".t1", .3, {opacity:0}, "+=.3")

	tl.from(".gold", .3, {x:size.w, ease:Power4.easeOut}, "+=3")
	tl.to(".bg2", .3, {x:-size.w*.5, ease:Power4.easeOut}, "+=.1")
	tl.to(".bg2", .4, {scale:.5, ease:Back.easeOut}, "+=.1")
	tl.from(".t2", .4, {opacity:0}, "+=.1")
	tl.add(slicerTween(), "+=2")
}




export {
	live_2,
	live_1,
	live_2_landscape,	
	live_1_landscape	
}