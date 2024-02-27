"use strict";

/** everyOther: return a string with every other letter. */

function everyOther(str: string): string {

  // base case: string is empty
  if (str === "") return "";

  else {
    return str[0] + everyOther(str.slice(2));
  }
}

export { everyOther };