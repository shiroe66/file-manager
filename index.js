import readline from "readline"
import process, { stdin as input, stdout as output } from "process"
import { up } from "./src/up.js"
import { ls } from "./src/ls.js"
import { cd } from "./src/cd.js"
import { cat } from "./src/cat.js"
import { add } from "./src/add.js"
import { rn } from "./src/rn.js"
import { cp } from "./src/cp.js"
import { rm } from "./src/rm.js"
import { hash } from "./src/hash.js"
import { currentPath } from "./src/helpers/currentPath.js"
import { table } from "console"
import { compress } from "./src/compress.js"
import { decompress } from "./src/decompress.js"

const rl = readline.createInterface({ input, output })

const args = process.argv.slice(3)
const userName = args.toString().slice(11)

output.write(`Welcome to the File Manager, ${userName}!\n`)
output.write(`You are currently in ${currentPath()}\n`)
output.write("Please, print command and wait for results!\n")

rl.on("line", (input) => {
  const command = input.split(" ")[0]

  switch (command) {
    case "up":
      up()
      break
    case "cd":
      cd(input)
      break
    case "ls":
      ls().then((list) => table(list))
      break
    case "cat":
      cat(input)
      break
    case "add":
      add(input)
      break
    case "rn":
      rn(input)
      break
    case "cp":
      cp(input)
      break
    case "mv":
      break
    case "rm":
      rm(input)
      break
    case "os":
      break
    case "hash":
      hash(input)
      break
    case "compress":
      compress(input)
      break
    case "decompress":
      decompress(input)
      break
    case ".exit":
      rl.close()
      break
    default:
      output.write("Invalid input\n")
  }

  if (input !== ".exit") {
    output.write(`You are currently in ${currentPath()}\n`)
  }
})

rl.on("close", () => {
  output.write(`Thank you for using File Manager, ${userName}!`)
})
