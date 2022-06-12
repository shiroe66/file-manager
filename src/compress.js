import { createReadStream, createWriteStream } from "fs"
import { createBrotliCompress } from "zlib"
import { join } from "path"

export const compress = async (input) => {
  const [, file, path] = input.split(" ")
  const source = join(process.cwd(), file)
  const dest = join(`${path}.br`)

  const rs = createReadStream(source)
  const ws = createWriteStream(dest)
  rs.on("error", () => console.log("Operation failed"))
  ws.on("error", () => console.log("Operation failed"))

  const brotli = createBrotliCompress()
  rs.pipe(brotli).pipe(ws)
}
