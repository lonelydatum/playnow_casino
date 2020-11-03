import {size, slicerSet, slicerTween} from '../../_common/js/common.js'

function range(min, max) {
	const diff = max-min
	const res = (Math.random()*diff) + min
	return res
}

function start(){
	
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	
	
	
	const time = .3

	tl.to("#how_1 .flip-card-inner", time, {rotationY:"+=180"});
	tl.to("#do_1 .flip-card-inner", time, {rotationY:"+=180"});
	tl.to("#you_1 .flip-card-inner", time, {rotationY:"+=180"});
	tl.to("#you_2 .flip-card-inner", time, {rotationY:"+=180"});
	tl.to("#spell_1 .flip-card-inner", time, {rotationY:"+=180"});
	tl.to("#exite_1 .flip-card-inner", time, {rotationY:"+=180"});
	tl.to("#exite_2 .flip-card-inner", time, {rotationY:"+=180"});
	tl.to("#exite_3 .flip-card-inner", time, {rotationY:"+=180"});
	tl.to("#exite_4 .flip-card-inner", time, {rotationY:"+=180"});


	
	
	slicerSet('f1')
	slicerSet('f2')

	const speed = .6

	
	
	tl.add("end", "+=.5")

	tl.add(slicerTween(), "end")

	// tl.gotoAndPlay("f2")
		
}

start()


module.exports = {};

