import Link from 'next/link'

// TODO Correct This
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
/* @ts-ignore */
const BlogPost = ({ post }) => {
  return <Link href={`blog/${post.slug}`}>{post.frontmatter.title}</Link>
}

export default BlogPost
