let arr = [1,3,5,6,7,9,10,11,22,43,56,90,110,222];


/**
 * @param {Array} arr 要检验的数组
 * @param {Number} number 要检验的元素
 * @return {String} 告知是否存在此元素
 */
function binaryChop (arr, number) {
  let head = 0,
      tail = arr.length - 1,
      middle;

  while (tail >= head) {
    middle = parseInt(( head + tail ) / 2);
    console.log('middle', middle);

    if (arr[middle] === number) {
      console.log('存在这个数');
      return '存在这个数';
    }

    if (arr[middle] > number) {
      tail = middle - 1;
    } else {
      head = middle + 1;
    }
  }
  
  console.log('不存在这个数');
  return '不存在这个数';
}

// binaryChop(arr, 90);
binaryChop(arr, 1090);
// binaryChop(arr, 900);