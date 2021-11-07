/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
 var shipWithinDays = function(weights, days) {
    let left = Math.max(...weights), right = weights.reduce((prev, curr) => prev+curr, 0);
    while(left < right) {
        const mid = Math.floor((right + left) / 2);
        let need = 1, sum = 0;
        for(let i=0; i< weights.length; i++) {
            if(sum+weights[i] > mid) {
                ++need;
                sum=0;
            }
            sum += weights[i];
        }
        if(need <= days) {
            right = mid;
        } else {
            left = mid+1;
        }
    }
    return right;
};