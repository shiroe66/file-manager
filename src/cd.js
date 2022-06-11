import { currentPath } from "./helpers/currentPath.js"
import { readdir } from "fs/promises"

export const cd = async (input) => {
  const folder = input.slice(3)
  const folders = await (await readdir(currentPath(), { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
  const find = folders.find((dirent) => dirent === folder)
  console.log(process.cwd())
  console.log(process.chdir("../"))
  console.log(process.cwd())
  if (find) {
    currentPath("cd", folder)
  } else {
    console.error("Operation failed")
  }
}
