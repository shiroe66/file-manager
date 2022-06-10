import fs from "fs/promises"
import { ls } from "../ls.js"
import { currentPath } from "./currentPath.js"

export const founder = async (input) => {
  const folder = input.slice(3)
  const folders = await fs.readdir(currentPath()).then((value) => value)
  const founded = folders.find((item) => item === folder)

  return { folder, founded }
}
