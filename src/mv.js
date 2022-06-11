import { createReadStream, createWriteStream } from "fs"
import { join } from "path"
import { currentPath } from "./helpers/currentPath.js"

export const mv = async (input) => {
  try {
    const file = join(currentPath(), input.split(" ")[1])
    const folder = join(currentPath(), input.split(" ")[2])

    if (file && folder) {
      const rs = createReadStream(file)
      const ws = createWriteStream(folder)
      rs.pipe(ws)
    }
  } catch (e) {
    console.log("Operation failed")
  }
}
