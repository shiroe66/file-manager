import fs from "fs/promises"
import path from "path"
import { currentPath } from "./helpers/currentPath.js"

export const cp = async (input) => {
  const inputArr = input.slice(3).split(" ")

  const oldPath = path.join(currentPath(), inputArr[0])
  const newPath = path.join(currentPath(), inputArr[1])

  fs.copyFile(oldPath, newPath).catch((err) =>
    console.error("FS operation failed")
  )
}
