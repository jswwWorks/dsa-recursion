/** binarySearch: given a sorted array of numbers, and a value,
 * return true if val is in array, false if not present). */

function binarySearch(arr: number[], val: number, left = 0, right = arr.length): boolean {

  if ((left === right) || (left === arr.length - 1)) return false;

  const idx: number = Math.floor((left + right) / 2);

  if (arr[idx] === val) return true;

  else if (arr[idx] > val) {
    return binarySearch(arr, val, left, right = idx);
  } else {
    return binarySearch(arr, val, left = idx, right);
  }

}

export { binarySearch };