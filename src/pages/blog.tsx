import { FC } from 'react'
import Head from 'next/head'

import { getAllPosts } from '@utilities/mdx'
import { Container } from '@components/ui'
import { BlogPost } from '@components/blog'

export type Frontmatter = {
  slug: string
  title: string
  description: string
}

type Post = {
  code: string
  slug: string
  frontmatter: Frontmatter
}

const Blog: FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <Container>
      <Head>
        <title>Shauns Blog</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>All latest Posts</h1>

      <div>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>
              <BlogPost post={post} />
            </li>
          ))}
        </ul>
      </div>
    </Container>
  )
}

export const getStaticProps = async () => {
  const posts = getAllPosts()

  return {
    props: { posts },
  }
}

export default Blog
