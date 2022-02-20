import * as fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import readingTime from 'reading-time'
import getAllFilesRecursively from 'utils/getAllFilesRecursively'
// Rehype Packages
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeCodeTitle from 'rehype-code-titles'
import rehypeCitation from 'rehype-citation'
import rehypePrismPlus from 'rehype-prism-plus'
// import rehypeSanitize from 'rehype-sanitize'
import rehypeSlug from 'rehype-slug'
// Remark Packages
import remarkGfm from 'remark-gfm'
// import remarkParse from 'remark-parse'
// import remarkRehype from 'remark-rehype'
// import { remarkSectionize } from 'remark-sectionize'
// import remarkStringify from 'remark-stringify'

export const ROOT = process.cwd()

export function getFiles(type: string) {
  const prefixPaths = path.join(ROOT, 'src/data', type)
  const files = getAllFilesRecursively(prefixPaths)
  // Only want to return blog/path and ignore root, replace is needed to work on Windows
  return files.map((file: string) =>
    file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
  )
}

export function formatSlug(slug: string) {
  return slug.replace(/\.(mdx|md)/, '')
}

export function dateSortDesc(a: string, b: string) {
  if (a > b) return -1
  if (a < b) return 1
  return 0
}

export async function getFileBySlug(type: string, slug: string) {
  const mdxPath = path.join(ROOT, 'src/data', type, `${slug}.mdx`)
  const mdPath = path.join(ROOT, 'src/data', type, `${slug}.md`)
  const source = fs.existsSync(mdxPath)
    ? fs.readFileSync(mdxPath, 'utf8')
    : fs.readFileSync(mdPath, 'utf8')

  // https://github.com/kentcdodds/mdx-bundler#nextjs-esbuild-enoent
  if (process.platform === 'win32') {
    process.env.ESBUILD_BINARY_PATH = path.join(
      ROOT,
      'node_modules',
      'esbuild',
      'esbuild.exe'
    )
  } else {
    process.env.ESBUILD_BINARY_PATH = path.join(
      ROOT,
      'node_modules',
      'esbuild',
      'bin',
      'esbuild'
    )
  }

  // const toc = []

  const { code, frontmatter } = await bundleMDX({
    source,
    // mdx imports can be automatically source from the components directory
    cwd: path.join(ROOT, 'src/components'),
    xdmOptions(options, frontmatter) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        // [remarkTocHeadings, { exportRef: toc }],
        remarkGfm,
        // [remarkFootnotes, { inlineNotes: true }],
        // remarkMath,
        // remarkImgToJsx,
        // remarkParse,
        // remarkRehype,
        // remarkStringify
        // remarkSectionize,
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeCodeTitle,
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor'],
            },
          },
        ],
        // rehypeKatex,
        [
          rehypeCitation,
          {
            bibliography: frontmatter?.bibliography,
            path: path.join(ROOT, 'src/data'),
          },
        ],
        [rehypePrismPlus, { ignoreMissing: true }],
        //rehypeSanitiza
      ]
      return options
    },
    esbuildOptions: (options) => {
      options.platform = 'node'
      options.target = ['es6', 'node14']
      options.loader = {
        ...options.loader,
        '.js': 'jsx',
        '.ts': 'tsx',
      }
      return options
    },
  })

  return {
    mdxSource: code,
    // toc,
    frontmatter: {
      readingTime: readingTime(code),
      slug: slug || null,
      fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
      ...frontmatter,
      date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
    },
  }
}

export async function getAllFilesFrontmatter(folder: string) {
  const prefixPaths = path.join(ROOT, 'src/data', folder)

  const files = getAllFilesRecursively(prefixPaths)

  const allFrontmatter: Array<{ [key: string]: string }> = []

  files.forEach((file: string) => {
    // Replace is needed to work on Windows
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
    // Remove Unexpected File
    if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
      return
    }
    const source = fs.readFileSync(file, 'utf8')
    const { data: frontmatter } = matter(source)
    if (frontmatter.draft !== true) {
      allFrontmatter.push({
        ...frontmatter,
        slug: formatSlug(fileName),
        date: frontmatter.date ? new Date(frontmatter.date).toISOString() : '',
      })
    }
  })

  return allFrontmatter.sort((a, b) => dateSortDesc(a.date, b.date))
}
