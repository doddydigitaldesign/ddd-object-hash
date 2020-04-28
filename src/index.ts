/**
 * ### objectToHash
 * Serializes an object to a string and hashes it, returning a hex string.
 * @param obj A JSON serializable object
 * @param alg
 */
export default async function objectToHash(
  obj: object,
  alg: "SHA-1" | "SHA-256" | "SHA-384" | "SHA-512"
): Promise<string> {
  const stringified = JSON.stringify(obj);
  const encoder = new TextEncoder();
  const utf8 = encoder.encode(stringified);
  const buff = await crypto.subtle.digest(alg, utf8);
  const arr = Array.from(new Uint8Array(buff));
  const hex = arr.map((byte) => byte.toString(16).padStart(2, "0")).join("");
  return hex;
}
