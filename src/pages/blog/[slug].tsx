import { useMemo } from 'react'
import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
  NextPage,
} from 'next'
import { getMDXComponent } from 'mdx-bundler/client'
import styles from 'assets/styles/[slug].module.scss'

import { getAllPosts, getSinglePost } from 'utilities/mdx'
import { Container } from 'components'
import { Calendar, Clock } from 'components/icons'

const Post: NextPage = ({
  code,
  frontmatter,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  // it's generally a good idea to memoize this function call to
  // avoid re-creating the component every render.
  const Component = useMemo(() => getMDXComponent(code), [code])

  return (
    <Container>
      <header style={{ maxWidth: '80ch', margin: '0 auto' }}>
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.description}</p>
        <div className={styles.Info}>
          <Calendar />
          <p>{frontmatter.date}</p>
          <p>{frontmatter.wordCount} words</p>
          <Clock />
          <p>{frontmatter.readingTime.text}</p>
        </div>
        <p>{frontmatter.slug}</p>
      </header>
      <article style={{ maxWidth: '80ch', margin: '0 auto' }}>
        <Component
        // components={{
        //   img: NextImage,
        // }}
        />
      </article>
    </Container>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // TODO Correct This
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  /* @ts-ignore */
  const post = await getSinglePost(params.slug)

  return {
    props: { ...post },
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPosts().map(({ slug }) => ({ params: { slug } }))
  return {
    paths,
    fallback: false,
  }
}

export default Post
