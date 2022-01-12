import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'
import readingTime from 'reading-time'

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
export const POSTS_PATH = path.join(process.cwd(), 'src/data/posts')

export const getFileContent = (filename: string) => {
  return fs.readFileSync(path.join(POSTS_PATH, filename), 'utf8')
}

const getCompiledMDX = async (mdxSource: string) => {
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

  try {
    return await bundleMDX({
      source: mdxSource,
      cwd: POSTS_PATH,
      xdmOptions: (options) => {
        options.remarkPlugins = [
          ...(options.remarkPlugins ?? []),
          // remarkParse,
          remarkGfm,
          // remarkRehype,
          // remarkStringify
          // remarkSectionize,
        ]
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          rehypeSlug,
          rehypeCodeTitle,
          [
            rehypeCitation,
            // {
            //   bibliography: frontmatter?.bibliography,
            //   path: path.join(root, 'data'),
            // },
          ],
          [rehypePrismPlus, { ignoreMissing: true }],
          [
            rehypeAutolinkHeadings,
            {
              properties: {
                className: ['anchor'],
              },
            },
          ],
          // rehypeSanitize,
        ]

        return options
      },
    })
  } catch {
    // TODO Correct This
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /* @ts-ignore */
    throw new Error(error)
  }
}

export const getAllPosts = () => {
  return fs
    .readdirSync(POSTS_PATH)
    .filter((path) => /\.mdx?$/.test(path))
    .map((fileName) => {
      const mdxSource = getFileContent(fileName)
      const slug = fileName.replace(/\.mdx?$/, '')
      const { data } = matter(mdxSource)

      return {
        frontmatter: data,
        slug: slug,
      }
    })
}

export const getSinglePost = async (slug: string) => {
  const mdxSource = getFileContent(`${slug}.mdx`)
  const { code, frontmatter } = await getCompiledMDX(mdxSource)

  const reading = readingTime(mdxSource)

  return {
    code,
    frontmatter: {
      wordCount: mdxSource.split(/\s+/gu).length,
      readingTime: reading,
      slug: slug || null,
      ...frontmatter,
    },
  }
}
