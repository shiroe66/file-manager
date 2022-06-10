import { createReadStream, createWriteStream } from "fs"
import { createBrotliDecompress } from "zlib"
import { join } from "path"
import { currentPath } from "./helpers/currentPath.js"

export const decompress = async (input) => {
  const file = input.split(" ")[1]
  const source = join(currentPath(), file)

  const newFile = `${file.split(".")[0]}.txt`
  const dest = join(currentPath(), newFile)

  const rs = createReadStream(source)
  const ws = createWriteStream(dest)
  const brotli = createBrotliDecompress()

  const stream = rs.pipe(brotli).pipe(ws)
  stream.on("finish", () =>
    console.log(`Decompressing done! Your filename ${newFile}`)
  )
}
