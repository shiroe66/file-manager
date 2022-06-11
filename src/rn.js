import { rename } from "fs/promises"
import { join } from "path"
import { currentPath } from "./helpers/currentPath.js"

export const rn = async (input) => {
  const [oldTitle, newTitle] = input.slice(3).split(" ")

  const oldFile = join(currentPath(), oldTitle)
  const newFile = join(currentPath(), newTitle)

  rename(oldFile, newFile).catch((err) =>
    console.error("Operation failed", err)
  )
}
