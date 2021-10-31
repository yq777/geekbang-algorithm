var Twitter = function () {
  // 每个用户能够发表的推特个数
  this.max = 10;
  // 发表时间
  this.time = 0;
  // {推特ID: 发表时间}, 用map是因为map是有序的
  this.timeMap = new Map();
  // 用户hash表
  this.user = {};
};

/**
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  // 用户不存在，初始化用户
  if (!this.user[userId]) {
    this.user[userId] = { followee: new Set(), tweets: new Array() };
  }
  // 当前发推数大于最大数量，pop最后一条，往最前面加一条，保证时间顺序
  if (this.user[userId].tweets.length >= this.max) {
    this.user[userId].tweets.pop();
    this.user[userId].tweets.unshift(tweetId);
    // 当前发推数小于最大数量，往最前面加一条，
  } else {
    this.user[userId].tweets.unshift(tweetId);
  }
  // 时间加1
  this.time++;
  this.timeMap.set(tweetId, this.time);
};

/**
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  // 用户不存在，初始化用户
  if (!this.user[userId]) {
    this.user[userId] = { followee: new Set(), tweets: new Array() };
  }
  // 获取关注用户id和自身id数组
  const userIds = [...this.user[userId].followee, userId];
  // 按时间倒序排列推特ID
  const sortTweetIds = [...this.timeMap.keys()].reverse();
  let userTweetIds = [];
  const result = [];
  // 获取自身和关注用户发的推特ID集合
  for (let key in this.user) {
    if (userIds.includes(+key)) {
      userTweetIds = [...userTweetIds, ...this.user[key].tweets];
    }
  }
  // 根据时间倒序推特ID去获取需要的10条推特ID
  for (let i = 0; i < sortTweetIds.length; i++) {
    if (result.length < 10) {
      if (userTweetIds.includes(+sortTweetIds[i])) {
        result.push(+sortTweetIds[i]);
      }
    } else {
      break;
    }
  }
  return result;
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  // 用户不存在，初始化用户
  if (!this.user[followerId]) {
    this.user[followerId] = { followee: new Set(), tweets: new Array() };
  }
  // 关注followeeId
  if (!this.user[followerId].followee.has(followeeId)) {
    this.user[followerId].followee.add(followeeId);
  }
};

/**
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  // 取关followeeId
  if (this.user[followerId].followee.has(followeeId)) {
    this.user[followerId].followee.delete(followeeId);
  }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
