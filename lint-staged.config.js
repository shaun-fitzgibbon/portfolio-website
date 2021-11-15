const { ESLint } = require('eslint')

const removeIgnoredFiles = async (files) => {
  const eslint = new ESLint()
  const isIgnored = await Promise.all(
    files.map((file) => {
      return eslint.isPathIgnored(file)
    })
  )
  const filteredFiles = files.filter((_, i) => !isIgnored[i])
  return filteredFiles.join(' ')
}

module.exports = {
  // Type check TypeScript files
  '**/*.ts?(x)': () => 'tsc --project tsconfig.json --pretty --noEmit',

  // Lint TypeScript and JavaScript files
  '**/*.(ts|tsx|js|jsx)': async (files) => {
    const filesToLint = await removeIgnoredFiles(files)
    return [`eslint --max-warnings=0 --fix ${filesToLint}`]
  },

  // Lint Css and Sass
  '**/*.(css|scss)': (filenames) => [`stylelint --fix ${filenames.join(' ')}`],

  // Format any files PRETTIER supports
  '*': 'prettier --ignore-unknown --write',
}
