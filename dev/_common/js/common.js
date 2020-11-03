const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

TweenLite.defaultEase = Power3.easeInOut


function slicerSet(frame){
	const el = document.getElementById(frame)
	const w = el.offsetWidth
	const h = el.offsetHeight
	
	const w_ = w/3
	TweenLite.set(`.${frame}.a`, {clip: `rect(0px,${w_}px,${h}px, ${(w_*1)-w_}px)`})
	TweenLite.set(`.${frame}.b`, {clip: `rect(0px,${w_*2}px,${h}px,${(w_*2)-w_}px)`})
	TweenLite.set(`.${frame}.c`, {clip: `rect(0px,${w_*3}px,${h}px,${(w_*3)-w_}px)`})
	
}

function range(min, max) {
	const diff = max-min
	const res = (Math.random()*diff) + min
	return res
}

function slicerTween(){

	const tl = new TimelineMax()
	tl.set([".f1", ".f2"], {opacity:1})
	const time = 1
	tl.to([".a"], time, {y:`+=${size.h}`}, 0)
	tl.to([".b"], time, {y:`+=${size.h}`}, .2)
	tl.to([".c"], time, {y:`+=${size.h}`}, .3)


	tl.to(".shad", .5, {opacity:0})
	return tl
}

function init(){
	const tl = new TimelineMax()
	tl.set(".frame1", {opacity:1})
	slicerSet('f1')
	slicerSet('f2')
	return tl
}


export {
	size, 
	range, 
	slicerTween, 
	init
}