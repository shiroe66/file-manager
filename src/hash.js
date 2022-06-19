import { createHash } from "crypto"
import { createReadStream } from "fs"
import { join } from "path"

export const hash = async (input) => {
  const file = join(process.cwd(), input.slice(5).trim())

  const rs = createReadStream(file)
  const hash = createHash("sha256").setEncoding("hex")

  rs.pipe(hash)
  hash.on("data", (chunk) => console.log(chunk))
}
