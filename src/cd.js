import { currentPath } from "./helpers/currentPath.js"
import { founder } from "./helpers/founder.js"

export const cd = async (input) => {
  const folder = (await founder(input)).folder
  const founded = (await founder(input)).founded

  if (founded) {
    currentPath("cd", folder)
  } else {
    console.error("Operation failed")
  }
}
