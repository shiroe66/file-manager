import { createReadStream, createWriteStream } from "fs"
import path from "path"
import { currentPath } from "./helpers/currentPath.js"

export const cp = async (input) => {
  const inputArr = input.slice(3).split(" ")

  const oldPath = path.join(currentPath(), inputArr[0])
  const newPath = path.join(currentPath(), inputArr[1])

  const rs = createReadStream(oldPath)
  const ws = createWriteStream(newPath)

  rs.pipe(ws)
}
