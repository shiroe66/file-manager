import { createReadStream } from "fs"
import path from "path"
import { currentPath } from "./helpers/currentPath.js"

export const cat = async (input) => {
  const file = path.join(currentPath(), input.slice(3).trim())

  const rs = createReadStream(file)
  rs.on("data", (chunk) => console.log(chunk.toString()))
  rs.on("error", () => console.log("Operation failed"))
}
