import { createWriteStream } from "fs"
import { access } from "fs/promises"
import { join } from "path"

export const add = async (input) => {
  const file = join(process.cwd(), input.slice(3).trim())

  access(file)
    .then(() => {
      console.log("Operation failed")
    })
    .catch(() => {
      const ws = createWriteStream(file)
    })
}
