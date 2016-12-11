/**
 * 只接收一个 整数的值
 * @param {Object} number
 */
function add(number){
	return number;
}

add(1);        // 1

add(1)(2);     // 3

add(1)(2)(3);  // 6
