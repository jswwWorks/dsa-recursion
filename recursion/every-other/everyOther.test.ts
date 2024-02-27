import { it, expect } from "vitest";
import { everyOther } from "./everyOther";

it("returns a string with every other character in the input", function () {
  expect(everyOther("")).toBe("");
  expect(everyOther("h")).toBe("h");
  expect(everyOther("hello")).toBe("hlo");
  expect(everyOther("help")).toBe("hl"); //added to check for even-length non-empty strings
});