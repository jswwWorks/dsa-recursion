"use strict";

/** find: return t/f is val is in arr. */

function find(arr: number[], val: number): boolean {

  //base case: empty array => false
  if (arr.length === 0) return false;

  //other base case: we found it!
  if (arr[0] === val) return true;

  return find(arr.slice(1), val);

}

export { find };