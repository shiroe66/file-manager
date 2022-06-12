import { createReadStream, createWriteStream } from "fs"
import { createBrotliDecompress } from "zlib"
import { join } from "path"

export const decompress = async (input) => {
  const [, file] = input.split(" ")
  const source = join(process.cwd(), file)

  const [newFile] = file.split(".")
  const dest = join(process.cwd(), `${newFile}.txt`)

  const rs = createReadStream(source)
  const ws = createWriteStream(dest)
  const brotli = createBrotliDecompress()

  const stream = rs.pipe(brotli).pipe(ws)
  stream.on("finish", () =>
    console.log(`Decompressing done! Your filename ${newFile}`)
  )
}
