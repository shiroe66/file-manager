import { stat } from "fs/promises"

export const cd = (input) => {
  const folder = input.slice(3)

  stat(`${process.cwd()}\\${folder}`, (_, stats) => {
    if (stats.isDirectory()) {
      process.chdir(`./${folder}`)
    }
  })
}
