import {size, init, slicerTween} from '../../_common/js/common.js'



function start(){
	
	const tl = init()
	tl.set(".frame1", {opacity:1})
	tl.from(".t1a", .3, {opacity:0}, "+=.3")
	tl.from(".t1b", .3, {opacity:0}, "+=.3")

	tl.add("wipe", "+=3")
	tl.set(".wiper", {className:"+=wiperOn"}, "wipe")
	tl.set(".line", {className:"+=lineOn"}, "wipe")

	tl.add(slicerTween(), "+=4")

	
		
}

start()


module.exports = {};

