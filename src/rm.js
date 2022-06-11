import { unlink } from "fs/promises"
import { join } from "path"
import { currentPath } from "./helpers/currentPath.js"

export const rm = async (input) => {
  const file = join(currentPath(), input.slice(3).trim())

  unlink(file).catch((err) => console.error("Operation failed"))
}
