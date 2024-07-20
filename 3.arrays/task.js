function compareArrays(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false
  }
  return arr1.every((item, i) => item === arr2[i])
}

function advancedFilter(arr) {
  // let firstFilter = arr.filter(item => item > 0);
  // let secondFilter = firstFilter.filter(item => item % 3 === 0)
  // let resultArr = secondFilter.map(item => item * 10)

  return resultArr = arr.filter(item => item > 0).filter(item => item % 3 === 0).map(item => item * 10);
}
