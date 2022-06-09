import fs from "fs/promises"
import path from "path"
import { currentPath } from "./helpers/currentPath.js"

export const rn = async (input) => {
  const inputArr = input.slice(3).split(" ")

  const oldTitle = path.join(currentPath(), inputArr[0])
  const newTitle = path.join(currentPath(), inputArr[1])

  fs.rename(oldTitle, newTitle).catch((err) =>
    console.error("Operation failed", err)
  )
}
