import {size, init, slicerTween, range, coinItem} from '../../_common/js/common.js'
import {coin_v1} from '../../_common/js/coin.js'


function start(){
	
	group1()
	// group2()
	
	coin_v1(.35)
		
}

function group1(){
	const tl = new TimelineMax()
	
	tl.add(coinItem(".coin_a", 300, 6), "t2+=.1")
	tl.add(coinItem(".coin_b", 400, 6), "t2+=.2")
	tl.add(coinItem(".coin_c", 500, 6), "t2+=.3")
	tl.add(coinItem(".coin_d", 600, 6), "t2+=.4")
}



start()


module.exports = {};

