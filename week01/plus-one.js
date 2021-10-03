/**
 * @param {number[]} digits
 * @return {number[]}
 */
/**
 * 思路：
 *  1、判断length对应位是否为9，是9需要进位，然后length位置需要往前移一位
 * 2、然后重复上述过程
 * 3、最后当length为-1的时候表明原数组所有值都为9，需要往前加一个1
 * 4、length不是-1的话表明对应length位需要加1就好
 */
 var plusOne = function(digits) {
    let length = digits.length-1;
    while(digits[length]===9) {
        digits[length] = 0;
        length--;
    }
    if(length === -1) {
        digits.unshift(1)
        return digits;
    }
    digits[length]=digits[length] + 1;
    return digits;
};