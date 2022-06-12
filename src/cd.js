import path, { join } from 'path'

export const cd = (input) => {
  const inputPath = input.slice(3).trim()

  try {
    if (path.isAbsolute(inputPath)) {
      process.chdir(resolve(process.cwd(), inputPath))
    } else {
      process.chdir(join(process.cwd(), inputPath))
    }
  } catch (err) {
    console.log('Operation failed');
  }
}
