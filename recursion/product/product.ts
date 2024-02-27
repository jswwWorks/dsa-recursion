import { LLNodeNum } from "../common/ll";

/** product: calculate the product of a linked list of numbers. */

function product(nums: LLNodeNum | null): number {

  // nums is either a node or null despite being plural
  if (nums === null) return 1; // has to be 1 because it's multiplication

  return nums.val * product(nums.next);
}

export { product };