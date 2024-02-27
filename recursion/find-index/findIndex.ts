/** findIndex: return index of val in arr (or -1 if val is not present). */

function findIndex(arr: number[], val: number): number {

  if (arr.length === 0) return -1;

  if (arr[0] === val) return Index

  return findIndex(arr.slice(1), val);



  return 42;
}

export { findIndex };
