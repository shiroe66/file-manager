import { createReadStream, createWriteStream } from "fs"
import { join } from "path"

export const cp = async (input) => {
  const [oldFile, newFile] = input.slice(3).split(" ")

  const oldPath = join(process.cwd(), oldFile)
  const newPath = join(process.cwd(), newFile)

  const rs = createReadStream(oldPath)
  const ws = createWriteStream(newPath)

  rs.pipe(ws)
}
