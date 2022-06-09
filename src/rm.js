import fs from "fs/promises"
import path from "path"
import { currentPath } from "./helpers/currentPath.js"

export const rm = async (input) => {
  const file = path.join(currentPath(), input.slice(3).trim())

  fs.unlink(file).catch((err) => console.error("Operation failed"))
}
