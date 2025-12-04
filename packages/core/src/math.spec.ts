import { test, expect } from "vitest";
import { adder } from "./math";

test("add(10, 20) should return 30", () => {
    expect(adder(10)(20)).toBe(30);
});
