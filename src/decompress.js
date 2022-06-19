import { createReadStream, createWriteStream } from "fs"
import { createBrotliDecompress } from "zlib"
import { join } from "path"

export const decompress = async (input) => {
  const [, file, path] = input.split(" ")
  const source = join(process.cwd(), file)
  const dest = join(path)

  const rs = createReadStream(source)
  const ws = createWriteStream(dest)
  rs.on("error", () => console.log("Operation failed"))
  ws.on("error", () => console.log("Operation failed"))

  const brotli = createBrotliDecompress()
  rs.pipe(brotli).pipe(ws)
}
