const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power3.easeInOut

function bgExitHandler(e) {
  Enabler.exit('Background Exit');
}

document.getElementById('banner').addEventListener('click', bgExitHandler, false);


function slicerSet(){
	
	const h = size.h
	const w = size.w/3
	
	TweenLite.set(`.f1.a`, {clip: `rect(0px,${w}px,${h}px, ${(w*1)-w}px)`})
	TweenLite.set(`.f1.b`, {clip: `rect(0px,${w*2}px,${h}px,${(w*2)-w}px)`})
	TweenLite.set(`.f1.c`, {clip: `rect(0px,${w*3}px,${h}px,${(w*3)-w}px)`})

	const h_ = h * 2
	const w_ = w * 2
	console.log(w_, h_);
	TweenLite.set(`.f2.a`, {clip: `rect(0px,${w_}px,${h_}px, ${(w_*1)-w_}px)`, y:-h})
	TweenLite.set(`.f2.b`, {clip: `rect(0px,${w_*2}px,${h_}px,${(w_*2)-w_}px)`, y:-h})
	TweenLite.set(`.f2.c`, {clip: `rect(0px,${w_*3}px,${h_}px,${(w_*3)-w_}px)`, y:-h})
	
}

function range(min, max) {
	const diff = max-min
	const res = (Math.random()*diff) + min
	return res
}

function slicerTween(){
	TweenLite.set(".shad", {opacity:1})
	const tl = new TimelineMax()
	tl.set([".f1", ".f2"], {opacity:1})

	let time = size.h / 450
	time = Math.max(time, .4)
	
	// const time = 5
	tl.to([".a"], time, {y:`+=${size.h}`}, 0)
	tl.to([".b"], time, {y:`+=${size.h}`}, .2)
	tl.to([".c"], time, {y:`+=${size.h}`}, .3)


	tl.to(".shad", .5, {opacity:0}, "+=.15")
	return tl
}

function init(){
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	const w_ = size.w/3
	const y = -size.h
	tl.set(".shad1", {x:w_*0, y})
	tl.set(".shad2", {x:w_*1, y})
	tl.set(".shad3", {x:w_*2, y})

	// tl.set(".shad", {opacity:0})
	setTimeout(()=>{
		slicerSet()
		// slicerSet('f2')
	}, 2000)
	return tl
}


export {
	size, 
	range, 
	slicerTween, 
	init
}