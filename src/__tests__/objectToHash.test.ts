import objectToHash from "../index";

describe("objectToHash", () => {
  const objA = {
    test: "a",
  };
  it("returns a string if given an object", () => {
    expect(typeof objectToHash(objA)).toBe("string");
  });
  it("returns the same string if given deeply equal objects", () => {
    const objB = { ...objA };
    expect(objectToHash(objA)).toStrictEqual(objectToHash(objB));
  });
  it("returns different strings given deeply non-equal objects", () => {
    const objB = { test: "b" };
    expect(objectToHash(objA) === objectToHash(objB)).toBe(false);
  });
});
