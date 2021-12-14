import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { bundleMDX } from 'mdx-bundler'

// import mdxPrism from 'mdx-prism'
// import remarkParse from 'remark-parse'
// import remark2Rehype from 'remark-rehype'
// import remarkAutolinkHeadings from 'remark-autolink-headings'
// import remarkSlug from 'remark-slug'
// import remarkCodeTitles from 'remark-code-titles'
// import remarkGfm from 'remark-gfm'

export const ROOT = process.cwd()
export const POSTS_PATH = path.join(process.cwd(), 'src/data/posts')

export const getFileContent = (filename: string) => {
  return fs.readFileSync(path.join(POSTS_PATH, filename), 'utf8')
}

const getCompiledMDX = async (content: string) => {
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
  // Add your remark and rehype plugins here
  const remarkPlugins: [] = []
  const rehypePlugins: [] = []

  try {
    return await bundleMDX({
      source: content,
      xdmOptions(options) {
        options.remarkPlugins = [
          ...(options.remarkPlugins ?? []),
          ...remarkPlugins,
        ]
        options.rehypePlugins = [
          ...(options.rehypePlugins ?? []),
          ...rehypePlugins,
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
      const source = getFileContent(fileName)
      const slug = fileName.replace(/\.mdx?$/, '')
      const { data } = matter(source)

      return {
        frontmatter: data,
        slug: slug,
      }
    })
}

export const getSinglePost = async (slug: string) => {
  const source = getFileContent(`${slug}.mdx`)
  const { code, frontmatter } = await getCompiledMDX(source)

  return {
    frontmatter,
    code,
  }
}
