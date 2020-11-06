import {size, init, slicerTween} from '../../_common/js/common.js'



function start(){
	
	const tl = init()
	
	
	
	const list = [	
		"#how_1 .flip-card-inner", 
		"#do_1 .flip-card-inner", 
		"#you_1 .flip-card-inner", 
		"#you_2 .flip-card-inner", 
		"#spell_1 .flip-card-inner",
		"#exite_1 .flip-card-inner", 
		"#exite_2 .flip-card-inner", 
		"#exite_3 .flip-card-inner", 
		"#exite_4 .flip-card-inner" 
	]

	// return

	
	tl.add(wof(list), 1)
	
	tl.to(".wheel", 2, {rotation:"+=500", ease:Back.easeInOut})
	
	tl.add("end", "+=3")

	tl.add(slicerTween(), "end")

	
		
}

function wof(list){
	const tl = new TimelineMax()
	for(let i=0; i<list.length; i++){
		tl.to(list[i], .3, {rotationY:"+=180"}, "-=.15");
	}

	return tl
}

start()


module.exports = {};

