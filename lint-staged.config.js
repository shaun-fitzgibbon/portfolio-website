module.exports = {
  // Type check TypeScript files
  '**/*.ts?(x)': () => 'yarn tsc -p tsconfig.json --pretty --noEmit',

  // Lint then format TypeScript and JavaScript files
  '**/*.(ts|tsx|js|jsx)': (filenames) => [
    `yarn eslint --fix ${filenames.join(' ')}`,
    //`yarn prettier --write ${filenames.join(' ')}`,
  ],

  // Format MarkDown and JSON and YAML
  // '**/*.(md|json|yaml|yml)': (filenames) =>
  // `yarn prettier --write ${filenames.join(' ')}`,

  // Format Css and Sass
  //'**/*.(css|scss)': (filenames) => `stylelint --fix ${filenames.join(' ')}`,
}
