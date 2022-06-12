import { createReadStream } from "fs"
import { join } from "path"

export const cat = async (input) => {
  const file = join(process.cwd(), input.slice(3).trim())

  const rs = createReadStream(file)
  rs.on("data", (chunk) => console.log(chunk.toString()))
  rs.on("error", () => console.log("Operation failed"))
}
