import {size, init, slicerTween} from '../../_common/js/common.js'



function start(){
	
	const tl = init()
	
	
	
	
	
	const list = [	
		"#how_1 .flip-card-inner", 
		"#do_1 .flip-card-inner", 
		"#you_1 .flip-card-inner", 
		"#you_2 .flip-card-inner", 
		"#spell_1 .flip-card-inner",
		"#fun_1 .flip-card-inner"
	]



	
	
	
	const {wof_v1} = require('../../_common/js/wof.js')
	wof_v1(list)

	
		
}


start()


module.exports = {};

