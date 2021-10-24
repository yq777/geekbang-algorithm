/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    const ans = [];
    const vis = new Array(nums.length).fill(false);
    nums = nums.sort((a, b) => a-b);
    const recur = (index, perm) => {
        if(index === nums.length) {
            ans.push(perm.slice());
            return;
        }
        for(let i=0; i< nums.length; i++) {
            if(vis[i] || (i > 0 && nums[i] === nums[i - 1] && !vis[i - 1])) {
                continue;
            }
            perm.push(nums[i]);
            vis[i] = true;
            recur(index+1, perm);
            vis[i] = false;
            perm.pop();
        }
    }
    recur(0, []);
    return ans;
};