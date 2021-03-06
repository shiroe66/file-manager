import { homedir } from "os"
import process, { stdin as input, stdout as output } from "process"
import readline from "readline"
import { add } from "./src/add.js"
import { cat } from "./src/cat.js"
import { cd } from "./src/cd.js"
import { compress } from "./src/compress.js"
import { cp } from "./src/cp.js"
import { decompress } from "./src/decompress.js"
import { hash } from "./src/hash.js"
import { ls } from "./src/ls.js"
import { mv } from "./src/mv.js"
import { os } from "./src/os.js"
import { rm } from "./src/rm.js"
import { rn } from "./src/rn.js"
import { up } from "./src/up.js"

const rl = readline.createInterface({ input, output })
process.chdir(homedir())

const args = process.argv.slice(3)
const userName = args.toString().slice(11)

output.write(`Welcome to the File Manager, ${userName}!\n`)
output.write(`You are currently in ${process.cwd()}\n`)
output.write("Please, print command and wait for results!\n")

rl.on("line", (input) => {
  const [command] = input.split(" ")

  switch (command) {
    case "up":
      up()
      break
    case "cd":
      cd(input)
      break
    case "ls":
      ls()
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
      mv(input)
      break
    case "rm":
      rm(input)
      break
    case "os":
      os(input)
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
    output.write(`You are currently in ${process.cwd()}\n`)
  }
})

rl.on("close", () => {
  output.write(`Thank you for using File Manager, ${userName}!`)
})
