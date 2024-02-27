"use strict";

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str: string): boolean {
  /**
   * tacocat
   * acoca
   * coc
   * o
   *
   * length<=1 => true
   * otherwise: do letters at either end match? return false if not, otherwise slice more
   */

  if (str.length <= 1) return true;
  if (str[0] === str[str.length - 1]) {
    return isPalindrome(str.slice(1, str.length - 1));
  }
  else {
    return false;
  }
}

export { isPalindrome };