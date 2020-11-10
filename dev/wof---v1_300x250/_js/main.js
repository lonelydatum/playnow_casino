import {size, init, slicerTween} from '../../_common/js/common.js'



function start(){
	
	
	
	
	
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

	
	const {wof_v1} = require('../../_common/js/wof.js')
	wof_v1(list)

	
		
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

