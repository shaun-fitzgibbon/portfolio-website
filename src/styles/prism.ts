import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
   /* STYLES FOR CODEBLOCKS */



/**
 * Inspired by gatsby remark prism - https://www.gatsbyjs.com/plugins/gatsby-remark-prismjs/
 * 1. Make the element just wide enough to fit its content.
 * 2. Always fill the visible space in .code-highlight.
 */
.code-highlight {
  min-width: 100%; /* 2 */
  float: left; /* 1 */
}

.code-line {
  display: block;
  padding-right: 16px;
  padding-left: 16px;
  border-left-width: 4px;
  border-left-color: rgb(31 41 55 / 0%); /* Set code block color */
  margin-right: -16px;
  margin-left: -16px;
}

.code-line.inserted {
  background-color: rgb(16 185 129 / 20%); /* Set inserted line (+) color */
}

.code-line.deleted {
  background-color: rgb(239 68 68 / 20%); /* Set deleted line (-) color */
}

.highlight-line {
  border-left: 5px solid hsl(307deg 95% 57%); /* Set highlight accent border color */
  margin-right: -16px;
  margin-left: -16px;
  background-color: hsl(231deg 15% 27%); /* Set highlight bg color */
}

.line-number::before {
  display: inline-block;
  width: 1rem;
  margin-right: 16px;
  margin-left: -8px;
  color: rgb(156 163 175); /* Line number color */
  content: attr(line);
  text-align: right;
}

/**
 * Dracula Theme originally by Zeno Rocha [@zenorocha]
 * https://draculatheme.com/
 *
 * Ported for PrismJS by Albert Vallverdu [@byverdu]
 */

code,
pre {
  background: none;
  color: hsl(60deg 30% 96%);
  font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
  hyphens: none;
  line-height: 1.5;
  tab-size: 4;
  text-align: left;
  text-shadow: 0 1px rgb(0 0 0 / 30%);
  white-space: pre;
  word-break: normal;
  word-spacing: normal;
  word-wrap: normal;
}

/* Code blocks */
pre {
  overflow: auto;
  padding: 1em;
  margin: 0.5em 0;
  border-radius: 0.3em;
  overflow-x: auto;
}

:not(pre) > code,
pre {
  background: hsl(231deg 15% 18%);
}

/* Inline code */
:not(pre) > code {
  padding: 0.1em;
  border-radius: 0.3em;
  white-space: normal;
}

.token.comment,
.token.prolog,
.token.doctype,
.token.cdata {
  color: hsl(225deg 27% 51%);
}

.token.punctuation {
  color: hsl(60deg 30% 96%);
}

.namespace {
  opacity: 0.7;
}

.token.property,
.token.tag,
.token.constant,
.token.symbol,
.token.deleted {
  color: hsl(326deg 100% 74%);
}

.token.boolean,
.token.number {
  color: hsl(265deg 89% 78%);
}

.token.selector,
.token.attr-name,
.token.string,
.token.char,
.token.builtin,
.token.inserted {
  color: hsl(135deg 94% 65%);
}

.token.operator,
.token.entity,
.token.url,
.language-css .token.string,
.style .token.string,
.token.variable {
  color: hsl(60deg 30% 96%);
}

.token.atrule,
.token.attr-value,
.token.function,
.token.class-name {
  color: hsl(65deg 92% 76%);
}

.token.keyword {
  color: hsl(191deg 97% 77%);
}

.token.regex,
.token.important {
  color: hsl(31deg 100% 71%);
}

.token.important,
.token.bold {
  font-weight: bold;
}

.token.italic {
  font-style: italic;
}

.token.entity {
  cursor: help;
}
`
