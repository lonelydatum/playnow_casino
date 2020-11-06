import {size, init, slicerTween} from '../../_common/js/common.js'



function start(){
	
	const tl = init()
	
	
	
	
	
	const list = [	
		
		"#take_1 .flip-card-inner",
"#take_2 .flip-card-inner",
"#take_3 .flip-card-inner",
"#take_4 .flip-card-inner",
"#anytime_5 .flip-card-inner",
"#it_1 .flip-card-inner",
"#it_2 .flip-card-inner",
"#for_1 .flip-card-inner",
"#for_2 .flip-card-inner",
"#for_3 .flip-card-inner",
"#a_1 .flip-card-inner",
"#you_2 .flip-card-inner",
"#spin_1 .flip-card-inner",
"#spin_2 .flip-card-inner",
"#spin_3 .flip-card-inner",
"#spin_4 .flip-card-inner",
"#like_3 .flip-card-inner",
"#like_4 .flip-card-inner"

	]





















	// return
	
	
	













	
	tl.add(wof(list), 3)

	tl.to(".wheel", 2, {rotation:"+=500", ease:Back.easeInOut})
	
	
	tl.add("end", "+=3")

	tl.add(slicerTween(), "end")

	
		
}

function wof(list){
	const tl = new TimelineMax()
	for(let i=0; i<list.length; i++){
		tl.to(list[i], .3, {rotationY:"+=180"}, "-=.21");
	}

	return tl
}

start()


module.exports = {};

