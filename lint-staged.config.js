const { ESLint } = require('eslint')

const removeIgnoredFiles = async (filenames) => {
  const eslint = new ESLint()
  const isIgnored = await Promise.all(
    filenames.map((filename) => {
      return eslint.isPathIgnored(filename)
    })
  )
  const filteredFiles = filenames.filter((_, i) => !isIgnored[i])
  return filteredFiles.join(' ')
}

module.exports = {
  // Type check TypeScript files
  '**/*.ts?(x)': 'tsc-files --project tsconfig.json --pretty --noEmit',

  // Lint TypeScript and JavaScript files
  '**/*.ts?(x)|js?(x)|md?(x)': async (filesnames) => {
    const filesToLint = await removeIgnoredFiles(filesnames)
    return [`eslint --max-warnings=0 --fix ${filesToLint}`]
  },

  // Lint Styled Components and Markdown Files
  '**/*.ts?(x)|js?(x)|md?(x)': (filenames) => [
    `stylelint --fix ${filenames.join(' ')}`,
  ],

  // Format any files PRETTIER supports
  '*': 'prettier --ignore-unknown --write',
}
