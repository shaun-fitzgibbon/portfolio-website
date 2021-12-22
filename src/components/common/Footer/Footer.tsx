import { Dribbble, Github, Linkedin, Twitter, Youtube } from '@components/icons'
import { Button, Container, Logo } from '@components/ui'
import Link from 'next/link'
import { FC } from 'react'
import styles from './Footer.module.css'

const Footer: FC = function () {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className={styles.Footer} id="contact-section">
      <Container>
        <div className={styles.TopContent}>
          <Logo />
        </div>
        <div className={styles.MiddleContent}>
          <div>
            <h2 className={styles.ColumnHeader}>Follow Me</h2>
            <ul>
              <li>
                <Link href="https://github.com/Sfitzg" passHref>
                  <a target="_blank">
                    <Github /> Github
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://dribbble.com/Sfitzg" passHref>
                  <a target="_blank">
                    <Dribbble /> Dribbble
                  </a>
                </Link>
              </li>
              <li>
                <Link href="https://twitter.com/Shaun_FitzG" passHref>
                  <a target="_blank">
                    <Twitter /> Twitter
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/in/shaun-fitzgibbon-233a9133/"
                  passHref
                >
                  <a target="_blank">
                    <Linkedin /> LinkedIN
                  </a>
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.youtube.com/channel/UCietrTpJj5zVvojRY61D5dg"
                  passHref
                >
                  <a target="_blank">
                    <Youtube /> YouTube
                  </a>
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className={styles.ColumnHeader}>Get in Contact</h2>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-recaptcha="true"
            >
              <input
                className={styles.Input}
                type="hidden"
                name="form-name"
                value="contact"
              />
              <div className={styles.Field}>
                <input
                  className={styles.Input}
                  type="text"
                  placeholder="Name"
                  name="name"
                />
              </div>
              <div className={styles.Field}>
                <input
                  className={styles.Input}
                  type="email"
                  placeholder="Email"
                  name="email"
                />
              </div>
              <div className={styles.Field}>
                <textarea
                  className={styles.Input}
                  placeholder="Description"
                  name="description"
                  id=""
                  cols={30}
                  rows={7}
                ></textarea>
              </div>
              <div className={styles.Field}>
                <div data-netlify-recaptcha="true"></div>
              </div>
              <div className={styles.Field}>
                <Button isLoading={true} type="submit">
                  HIT ME UP
                </Button>
              </div>
            </form>
          </div>
        </div>
      </Container>
      <div className={styles.BottomWrapper}>
        <Container>
          <div className={styles.BottomContent}>
            <div className={styles.Copywrite}>
              {' '}
              &copy; {year} - Shaun Fitzgibbon
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
