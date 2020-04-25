import crypto from "crypto";
import { TransformOptions } from "stream";

interface Options extends TransformOptions {
  algorithm: "md5" | "sha1" | "sha256";
}

export default function objectToHash(
  obj: object,
  opts?: Partial<Options>
): string {
  const options: Options = {
    algorithm: opts?.algorithm ?? "sha256",
    allowHalfOpen: opts?.allowHalfOpen,
    decodeStrings: opts?.decodeStrings,
    destroy: opts?.destroy,
    encoding: opts?.encoding,
    final: opts?.final,
    flush: opts?.flush,
    highWaterMark: opts?.highWaterMark,
    objectMode: opts?.objectMode,
    read: opts?.read,
    readableHighWaterMark: opts?.readableHighWaterMark,
    readableObjectMode: opts?.readableObjectMode,
    transform: opts?.transform,
    writableHighWaterMark: opts?.writableHighWaterMark,
    writableObjectMode: opts?.writableObjectMode,
    write: opts?.write,
    writev: opts?.writev,
  };
  const { algorithm, ...rest } = options;
  const stream = crypto.createHash(algorithm, rest);
  return stream.update(JSON.stringify(obj)).digest("base64");
}
console.log(objectToHash({ test: "b hash" }));
