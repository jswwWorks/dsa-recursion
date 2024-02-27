"use strict";

/** findIndex: return index of val in arr (or -1 if val is not present). */

function findIndex(arr: number[], val: number): number {

  /**This block counts from right, seems neater but is not correct behaviour
   *
   *    if (arr.length === 0) return -1;
   *
   *    if (arr[arr.length - 1] === val) return arr.length - 1;
   *
   *    return findIndex(arr.slice(0, -1), val);
   */


  // So gross!

  if (arr.length === 0) return -1;

  if (arr[0] === val) return 0;

  if (findIndex(arr.slice(1), val) === -1) return -1;

  return 1 + findIndex(arr.slice(1), val);

  /**
   * [5, 2, 3, 2] => 3
   *
   * [5, 2, 3] =>
   *
   * [5, 2] =>
   *
   * [5] => -1
   *
   * [] => -1
   *
   *
   * [5, 2, 3, 2]
   * [2, 3, 2] => 0
   *
   *
   * Base case: match of first element => return 0
   * Otherwise, return 1 + findIndex(rest of array)
   * [5, 2, 3, 2] (looking for 3) => 1 + findIndex([2, 3, 2])
   * [2, 3, 2] => 1 + 1 + findIndex([3, 2])
   * [3, 2] => 1 + 1 + 0
   * []
   */

}

export { findIndex };
