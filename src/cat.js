import fs from "fs/promises"
import path from "path"
import { currentPath } from "./helpers/currentPath.js"

export const cat = async (input) => {
  const file = path.join(currentPath(), input.slice(3).trim())

  fs.readFile(file, "utf-8")
    .then((value) => console.log(value))
    .catch((err) => console.error(err))
}
