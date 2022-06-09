import fs from "fs/promises"
import path from "path"
import { currentPath } from "./helpers/currentPath.js"

export const add = async (input) => {
  const file = path.join(currentPath(), input.slice(3).trim())

  fs.writeFile(file, "", {
    flag: "wx",
  }).catch((err) => console.error("Operation failed"))
}
