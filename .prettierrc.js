/** @type {import("prettier").Options} */
module.exports = {
  plugins: ['prettier-plugin-tailwindcss'],

  singleAttributePerLine: false,
  singleQuote: true,
  useTabs: false,
  printWidth: 90,
  tabWidth: 2,
  semi: true,
  htmlWhitespaceSensitivity: 'strict',
  arrowParens: 'avoid',
  bracketSpacing: true,
  proseWrap: 'preserve',
  trailingComma: 'none',
  endOfLine: 'auto',



  attributeGroups: [
    '$ANGULAR_STRUCTURAL_DIRECTIVE',
    '$ANGULAR_ELEMENT_REF',
    '$ID',
    '$CLASS',
    '$TYPE',
    '$FOR',
    '$NAME',
    '$DEFAULT',
    '$ANGULAR_ANIMATION',
    '$ANGULAR_ANIMATION_INPUT',
    '$ANGULAR_INPUT',
    '$ANGULAR_TWO_WAY_BINDING',
    '$ANGULAR_OUTPUT'
  ],
  attributeSort: 'ASC'
};
