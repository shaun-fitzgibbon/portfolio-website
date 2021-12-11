import { Button, Container, Logo } from '@components/ui'
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
              <li>Github</li>
              <li>Dribbble</li>
              <li>Twitter</li>
              <li>LinkedIN</li>
              <li>YouTube</li>
            </ul>
          </div>
          <div>
            <h2 className={styles.ColumnHeader}>Get in Contact</h2>
            <form name="contact" method="POST" data-netlify="true">
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
