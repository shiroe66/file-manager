import { createHash } from "crypto"
import { createReadStream } from "fs"
import path from "path"
import { currentPath } from "./helpers/currentPath.js"

export const hash = async (input) => {
  const file = path.join(currentPath(), input.slice(5).trim())

  const rs = createReadStream(file)
  const hash = createHash("sha256").setEncoding("hex")

  hash.on("data", (hash) => console.log(hash))
  rs.pipe(hash)
}
