import objectToHash from "../index";

describe("objectToHash", () => {
  const objA = {
    test: "a",
  };
  const hashA = objectToHash(objA, "SHA-256");
  it("returns the same string if given deeply equal objects", () => {
    const objB = { ...objA };
    const hashB = objectToHash(objB, "SHA-256");
    expect(hashA).toStrictEqual(hashB);
  });
  it("returns different strings given deeply non-equal objects", () => {
    const objB = { test: "b" };
    const hashB = objectToHash(objB, "SHA-256");
    expect(hashA === hashB).toBe(false);
  });
});
