import cn from 'classnames'
import { Link } from 'components'
import { Dribbble, Github, Linkedin, Twitter, Youtube } from 'components/icons'
import styles from './SocialFollowMe.module.scss'

const SocialFollowMe = () => {
  return (
    <ul className={styles.List}>
      <li>
        <Link className={styles.Social} href="https://github.com/Sfitzg">
          <i className={cn(styles.Icon, styles.GithubIcon)}>
            <Github />
          </i>
          <span className={styles.Text}>Github</span>
        </Link>
      </li>
      <li>
        <Link className={styles.Social} href="https://dribbble.com/Sfitzg">
          <i className={cn(styles.Icon, styles.DribbbleIcon)}>
            <Dribbble />
          </i>
          <span className={styles.Text}>Dribbble</span>
        </Link>
      </li>
      <li>
        <Link className={styles.Social} href="https://twitter.com/Shaun_FitzG">
          <i className={cn(styles.Icon, styles.TwitterIcon)}>
            <Twitter />
          </i>
          <span className={styles.Text}>Twitter</span>
        </Link>
      </li>
      <li>
        <Link
          className={styles.Social}
          href="https://www.linkedin.com/in/shaun-fitzgibbon-233a9133/"
        >
          <i className={cn(styles.Icon, styles.LinkedinIcon)}>
            <Linkedin />
          </i>
          <span className={styles.Text}>LinkedIN</span>
        </Link>
      </li>
      <li>
        <Link
          className={styles.Social}
          href="https://www.youtube.com/channel/UCietrTpJj5zVvojRY61D5dg"
        >
          <i className={cn(styles.Icon, styles.YoutubeIcon)}>
            <Youtube />
          </i>
          <span className={styles.Text}>YouTube</span>
        </Link>
      </li>
    </ul>
  )
}

export default SocialFollowMe
