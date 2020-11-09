import {size, init, slicerTween} from './common.js'


const time_v1 = 1



function wof_v2(list){

	const tl = init()
	tl.to(".wheel", 2, {rotation:"-=500", ease:Back.easeInOut}, 3)
	tl.add(flip(list), "-=.3")
	
	
	
	tl.add("end", `+=2.2`)

	tl.add(slicerTween(), "end")
}



function wof_v1(list){

	const tl = init()
	tl.add(flip(list), 1)
	tl.to(".wheel", 2, {rotation:"-=500", ease:Back.easeInOut})
	
	

	tl.add(slicerTween(), `+=1`)

}



function flip(list){
	const tl = new TimelineMax()
	for(let i=0; i<list.length; i++){
		tl.to(list[i], .3, {rotationY:"+=180"}, "-=.21");
	}

	return tl
}


export {
	wof_v1,
	wof_v2,
	time_v1	
}