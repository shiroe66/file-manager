import { rename } from "fs/promises"
import { join } from "path"

export const mv = async (input) => {
  const [, file, folder] = input.split(" ")

  const filePath = join(process.cwd(), file)
  const folderPath = join(process.cwd(), folder, file)

  await rename(filePath, folderPath).catch(() =>
    console.log("Operation failed")
  )
}
