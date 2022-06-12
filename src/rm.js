import { unlink } from "fs/promises"
import { join } from "path"

export const rm = async (input) => {
  const file = join(process.cwd(), input.slice(3).trim())

  unlink(file).catch((err) => console.error("Operation failed"))
}
