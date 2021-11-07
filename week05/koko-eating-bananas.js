/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
 var minEatingSpeed = function(piles, h) {
    let left = 1, right = 1000000000;
    const possible = (mid) => {
        let time = 0;
        for(let i=0; i< piles.length; i++) {
            time += Math.ceil(piles[i] / mid);
        }
        return time <= h;
    }
    while(left < right) {
        const mid = Math.floor((left+ right) / 2)
        if(!possible(mid)) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return left
};