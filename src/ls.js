import { readdir } from "fs/promises"

export const ls = async () => {
  return readdir(process.cwd)
    .then((list) => table(list))
    .catch((err) => console.error(err))
}
