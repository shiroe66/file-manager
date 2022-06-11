import { createReadStream, createWriteStream } from "fs"
import { join } from "path"
import { currentPath } from "./helpers/currentPath.js"

export const cp = async (input) => {
  const [oldFile, newFile] = input.slice(3).split(" ")

  const oldPath = join(currentPath(), oldFile)
  const newPath = join(currentPath(), newFile)

  const rs = createReadStream(oldPath)
  const ws = createWriteStream(newPath)

  rs.pipe(ws)
}
