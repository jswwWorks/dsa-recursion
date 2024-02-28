/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearchIndex(
  arr: number[],
  val: number,
  left = 0,
  right = arr.length): number {

  if ((left === right) || (left === arr.length - 1)) return -1;

  const idx: number = Math.floor((left + right) / 2);

  if (arr[idx] === val) return idx;

  else if (arr[idx] > val) {
    return binarySearchIndex(arr, val, left, right = idx);
  } else {
    return binarySearchIndex(arr, val, left = idx, right);
  }



}

export { binarySearchIndex };