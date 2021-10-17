/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var subarraySum = function(nums, k) {
    let sum = 0, count= 0;
    const obj = {0:1};
    for(let i=0; i< nums.length; i++) {
        sum += nums[i];
        if(obj[sum-k]) {
            count+=obj[sum-k];
        }
        if(obj[sum]) {
            obj[sum]+=1;
        } else {
            obj[sum]=1;
        }
    }
    return count;
};