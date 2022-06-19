import { rename } from "fs/promises"
import { join } from "path"

export const rn = async (input) => {
  const [oldTitle, newTitle] = input.slice(3).split(" ")

  const oldFile = join(process.cwd(), oldTitle)
  const newFile = join(process.cwd(), newTitle)

  rename(oldFile, newFile).catch((err) => console.error("Operation failed"))
}
