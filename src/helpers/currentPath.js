import { homedir } from "os"

process.cwd()
process.chdir(homedir())

export const currentPath = (action = "", path) => {
  if (action.trim() === "") {
    return process.cwd()
  }

  if (action === "up") {
    process.chdir("../")
  }

  if (action === "cd") {
    process.chdir(`./${path}`)
  }
}
