"use strict";

/** gatherStrings: given an object, return array of all the string values. */

function gatherStrings(obj: Record<string, any>): string[] {

  const valueArray: string[] = [];

  for (const key in obj) {
    if ((typeof obj[key]) === 'string') valueArray.push(obj[key]);
    else if (
        (
          typeof obj[key] === 'object'
          && !Array.isArray(obj[key])
        )
      ){
      valueArray.push(...gatherStrings(obj[key]));
    }

  }

  return valueArray;

  /**
   * Base case: no unaccessed keys in object
   *
   * nestedObj = {
    firstName: "Lester",
    favoriteNumber: 22,
    moreData: {
      lastName: "Testowitz",
    },
    funFacts: {
      moreStuff: {
        anotherNumber: 100,
        deeplyNestedString: {
          almostThere: {
            success: "you made it!",
          },
        },
      },
      favoriteString: "nice!",
    },
  }
   */
}

export { gatherStrings };
