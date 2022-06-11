import { createReadStream, createWriteStream } from "fs"
import { join } from "path"
import { currentPath } from "./helpers/currentPath.js"

export const mv = async (input) => {
  const [, file, folder] = input.split(" ")

  try {
    const filePath = join(currentPath(), file)
    const folderPath = join(currentPath(), folder)

    if (filePath && folderPath) {
      const rs = createReadStream(filePath)
      const ws = createWriteStream(folderPath)
      rs.pipe(ws)
    }
  } catch (e) {
    console.log("Operation failed")
  }
}
