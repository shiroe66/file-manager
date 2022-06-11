import { createReadStream, createWriteStream } from "fs"
import { createBrotliCompress } from "zlib"
import { join } from "path"
import { currentPath } from "./helpers/currentPath.js"

export const compress = async (input) => {
  const [, file] = input.split(" ")
  const source = join(currentPath(), file)

  const [newFile] = file.split(".")
  const dest = join(currentPath(), `${newFile}.br`)

  const rs = createReadStream(source)
  const ws = createWriteStream(dest)
  const brotli = createBrotliCompress()

  const stream = rs.pipe(brotli).pipe(ws)
  stream.on("finish", () =>
    console.log(`Compressing done! Your filename ${newFile}`)
  )
}
