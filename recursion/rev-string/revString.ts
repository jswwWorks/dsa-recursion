/** revString: return a copy of a string, but in reverse. */

function revString(str: string): string {

  /**
   *  Little example for later:
   *
   *  "phineas"
   *
   *  - not empty
   *
   *  everythingButLastLetter gets called, sending in "phinea"
   *    - (keeps on getting called with "phine", "phin", "phi", "ph", "p", "")
   *
   *  returns "" when "" is sent through as a param
   *
   *    - goes back to "p" instance, and returns "p" + ""
   *    - goes back to "ph", and returns "h" + "p"
   *    ...
   *
   *  until it eventually returns "saenihp"
   *
   */

  if (str === "") return "";

  // Shorter - stepping through forwards
  return revString(str.slice(1)) + str[0];

  // Approach in example - stepping through backwards
  const everythingButTheLastLetter: string = revString(str.slice(0, -1));

  return str[str.length - 1] + everythingButTheLastLetter;

}

export { revString };