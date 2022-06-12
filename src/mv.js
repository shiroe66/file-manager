import { createReadStream, createWriteStream } from "fs"
import { join } from "path"

export const mv = async (input) => {
  const [, file, folder] = input.split(" ")

  try {
    const filePath = join(process.cwd(), file)
    const folderPath = join(process.cwd(), folder)

    if (filePath && folderPath) {
      const rs = createReadStream(filePath)
      const ws = createWriteStream(folderPath)
      rs.pipe(ws)
    }
  } catch (e) {
    console.log("Operation failed")
  }
}
