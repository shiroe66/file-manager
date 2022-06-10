const dir = process.env.HOME || process.env.USERPROFILE
const array = dir.split("\u005C")

export const currentPath = (action = "", path) => {
  if (action.trim() === "") {
    return `${array.join("\u005C")}\u005C`
  }

  if (action === "up" && array.length > 1) {
    array.pop()
  }

  if (action === "cd") {
    array.push(path)
  }
}
