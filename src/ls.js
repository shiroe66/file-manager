import { readdir } from "fs/promises"
import { currentPath } from "./helpers/currentPath.js"

export const ls = async () => {
  return readdir(currentPath()).catch((err) => console.error(err))
}
