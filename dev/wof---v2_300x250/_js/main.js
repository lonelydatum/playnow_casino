import {size, init, slicerTween} from '../../_common/js/common.js'



function start(){
	
	const tl = init()
	
	
	
	
	
	const list = [	
		
		"#take_1 .flip-card-inner",
		"#take_2 .flip-card-inner",
		"#take_3 .flip-card-inner",
		"#take_4 .flip-card-inner",
		"#null_1 .flip-card-inner",
		"#it_1 .flip-card-inner",
		"#it_2 .flip-card-inner",
		"#for_1 .flip-card-inner",
		"#for_2 .flip-card-inner",
		"#for_3 .flip-card-inner",
		"#a_1 .flip-card-inner",
		"#spin_1 .flip-card-inner",
		"#spin_2 .flip-card-inner",
		"#spin_3 .flip-card-inner",
		"#spin_4 .flip-card-inner",
	]

	

	TweenLite.to(".wheel", 2, {rotation:"+=500", ease:Power2.easeOut, delay: 3})













	
	tl.add(wof(list), 3)
	
	
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

