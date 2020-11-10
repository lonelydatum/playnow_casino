import {size, init, slicerTween, range, coinItem} from '../../_common/js/common.js'
import {coin_v1} from '../../_common/js/coin.js'


function start(){
	
	group1()
	// group2()
	
	coin_v1(.35)
		
}

function group1(){
	const tl = new TimelineMax()
	tl.add(coinItem(".coin_a", -60, 3), 0)
	tl.add(coinItem(".coin_b", -30, 3), .2)
	tl.add(coinItem(".coin_c", 210, 3), .1)
	tl.add(coinItem(".coin_d", 230, 3), .4)
}

start()


module.exports = {};

