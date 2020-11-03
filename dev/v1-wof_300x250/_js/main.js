import {size, init, slicerTween} from '../../_common/js/common.js'



function start(){
	
	const tl = init()
	
	
	
	const time = .3

	tl.to("#how_1 .flip-card-inner", time, {rotationY:"+=180"}, "+=1");
	tl.to("#do_1 .flip-card-inner", time, {rotationY:"+=180"});
	tl.to("#you_1 .flip-card-inner", time, {rotationY:"+=180"});
	tl.to("#you_2 .flip-card-inner", time, {rotationY:"+=180"});
	tl.to("#spell_1 .flip-card-inner", time, {rotationY:"+=180"});
	tl.to("#exite_1 .flip-card-inner", time, {rotationY:"+=180"});
	tl.to("#exite_2 .flip-card-inner", time, {rotationY:"+=180"});
	tl.to("#exite_3 .flip-card-inner", time, {rotationY:"+=180"});
	tl.to("#exite_4 .flip-card-inner", time, {rotationY:"+=180"});


	
	
	

	

	
	
	tl.add("end", "+=.5")

	tl.add(slicerTween(), "end")

	
		
}

start()


module.exports = {};

