/**
 * 此方法升序排序。
 * @param {Array} 传入进行选择排序的数组。  
 * @return {Array} 返回已经排序好的数组。
 */
function selectionSort (arr) {
  let newArr = [],
      length = arr.length;

  
  for (let j = 0;j < length;j++) {
    let index = getSmallest(arr);
    newArr.push(arr[index]);
    arr.splice(index, 1);
  }

  console.log(newArr);
  return newArr;


}


/**
 * 找出最小值
 * @param {Array} 传入数组 
 * @return {Number} 返回最小值元素的下标。
 */
function getSmallest (arr) {
  let item = arr[0];
  let index = 0;

  for (let i = 0;i < arr.length;i++) {
    if (arr[i] < item) {
      item = arr[i];
      index = i;
    }
  }

  return index;

}

let arr = [2,1,834,22,7664,2,8845,355,75,85,9,23];
selectionSort(arr);