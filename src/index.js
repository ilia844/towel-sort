
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined) return [];
  let resArr = [];

  for (let i = 0; i < matrix.length; i++) {
    let arr = [];
    if (Array.isArray(matrix[i])) {
      if (i % 2 === 0) {
        arr = matrix[i].sort(function(a,b) { return a - b });
      } else {
        arr = matrix[i].sort(function(a,b) { return b - a })
      }
    }
    resArr = resArr.concat(arr);
  } 
  return resArr;
}
