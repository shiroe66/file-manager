import { createWriteStream } from "fs"
import { join } from "path"
import { currentPath } from "./helpers/currentPath.js"

export const add = async (input) => {
  const file = join(currentPath(), input.slice(3).trim())

  const ws = createWriteStream(file)
  ws.on("error", () => console.log("Operation failed"))
}
