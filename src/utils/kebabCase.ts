import GithubSlugger from 'github-slugger'

const slugger = new GithubSlugger()

const kebabCase = (str: string) => slugger.slug(str)

export default kebabCase
