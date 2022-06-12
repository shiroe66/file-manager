import { createWriteStream } from "fs"
import { join } from "path"

export const add = async (input) => {
  const file = join(process.cwd(), input.slice(3).trim())

  const ws = createWriteStream(file)
  ws.on("error", () => console.log("Operation failed"))
}
