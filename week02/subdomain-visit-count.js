/**
 * @param {string[]} cpdomains
 * @return {string[]}
 * 1、通过hash表统计每个域名的数值
 * 2、遍历hash表得到结果
 * 时间复杂度: O(n)
 */
var subdomainVisits = function (cpdomains) {
  const sumHash = {};
  const ans = [];
  for (let i = 0; i < cpdomains.length; i++) {
    const [count, domain] = cpdomains[i].split(' ');
    const domains = domain.split('.');
    let prev = '';
    for (let j = domains.length - 1; j > -1; j--) {
      prev = `${domains[j]}${prev ? `.${prev}` : prev}`;
      if (sumHash[prev]) {
        sumHash[prev] += +count;
      } else {
        sumHash[prev] = +count;
      }
    }
  }
  for (let key in sumHash) {
    ans.push(`${sumHash[key]} ${key}`);
  }
  return ans;
};
