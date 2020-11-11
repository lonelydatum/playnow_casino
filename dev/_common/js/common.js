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
	TweenLite.set(`.shadMain`, {height:"200%", opacity:0} )
	TweenLite.set(`.f2.a`, {clip: `rect(0px,${w}px,${h}px, ${(w*1)-w}px)`, y:-h})
	TweenLite.set(`.f2.b`, {clip: `rect(0px,${w*2}px,${h}px,${(w*2)-w}px)`, y:-h})
	TweenLite.set(`.f2.c`, {clip: `rect(0px,${w*3}px,${h}px,${(w*3)-w}px)`, y:-h})
	
}

function range(min, max) {
	const diff = max-min
	const res = (Math.random()*diff) + min
	return res
}

function slicerTween(){
	
	TweenLite.set(".shad", {opacity:1})
	
	const tl = new TimelineMax()
	console.log(size.h);

	tl.set([".f1", ".f2"], {opacity:1})
	tl.to(`.shadMain`, .3, {opacity:1, ease:Power2.easeIn})

	let time = size.h / 450

	time = Math.max(time, .4)

	// time = 10
		
	tl.to([".a"], time, {y:`+=${size.h}`}, 0)
	tl.to([".b"], time, {y:`+=${size.h}`}, .2)
	tl.to([".c"], time, {y:`+=${size.h}`}, .3)

	// const time = 10
	// tl.to(".a", time, {y:`+=${size.h}`}, 0)
	// tl.to(".b", time, {y:`+=${size.h}`}, 0)
	// tl.to(".c", time, {y:`+=${size.h}`}, 0)


	tl.to(".shad", .2, {opacity:0, ease:Power2.easeIn}, "+=0")
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
		// slicerSet()
		// slicerSet('f2')
	}, 2000)
	slicerSet()
	return tl
}

function coinItem(id, x, repeat){
	console.log(repeat);
	const tl = new TimelineMax({repeat:repeat})	
	const delay = range(0, .8)
	// const time = range(.5, .8)	
	tl.set(id,  {x, y:-100})
	const height = size.h
	let time = height/500
	
	time = Math.max(time, .7)
	time = Math.min(time, 1)
	
	// tl.set(id, {scale:range(.25, .5)})
	tl.to(id, time, {y:height, rotation:`+=500}`,ease:Power1.easeIn})
	return tl
}


export {
	coinItem,
	size, 
	range, 
	slicerTween, 
	init
}