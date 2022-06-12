import { readdir } from "fs/promises"

export const cd = async (input) => {
  const folder = input.slice(3)
  const folders = await (await readdir(process.cwd(), { withFileTypes: true }))
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name)
  const find = folders.find((dirent) => dirent === folder)
  if (find) {
    process.chdir(`./${folder}`)
  } else {
    console.error("Operation failed")
  }
}
