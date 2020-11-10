import {size, init, slicerTween} from '../../_common/js/common.js'
// import {time_v2} from '../../_common/js/wof.js'


function start(){
	
	
	
	
	
	
	
	const list = [	
		
		"#take_1 .flip-card-inner",
		"#take_2 .flip-card-inner",
		"#take_3 .flip-card-inner",
		"#take_4 .flip-card-inner",
		"#anytime_5 .flip-card-inner",
		"#anytime_6 .flip-card-inner",
		"#anytime_7 .flip-card-inner",
		"#it_1 .flip-card-inner",
		"#it_2 .flip-card-inner",
		"#you_3 .flip-card-inner",
		"#for_1 .flip-card-inner",
		"#for_2 .flip-card-inner",
		"#for_3 .flip-card-inner",
		"#a_1 .flip-card-inner",
		"#like_2 .flip-card-inner",
		"#spin_1 .flip-card-inner",
		"#spin_2 .flip-card-inner",
		"#spin_3 .flip-card-inner",
		"#spin_4 .flip-card-inner"

	]


	// return
	
	
	





const {wof_v2} = require('../../_common/js/wof.js')
	wof_v2(list)







	
	// tl.add(wof(list), 3)
	// tl.to(".wheel", 2, {rotation:"+=500", ease:Back.easeInOut})
	
	// tl.add("end", `+=${time_v2}`)

	// tl.add(slicerTween(), "end")

	
		
}


start()


module.exports = {};

