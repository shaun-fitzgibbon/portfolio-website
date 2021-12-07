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
          </div>
          <div>
            <h2 className={styles.ColumnHeader}>Get in Contact</h2>
            <form name="contact" method="POST" data-netlify="true">
              <input type="hidden" name="form-name" value="contact" />
              <div>
                <input type="text" placeholder="Name" name="name" />
              </div>
              <div>
                <input type="email" placeholder="Email" name="email" />
              </div>
              <div>
                <textarea
                  placeholder="Description"
                  name="description"
                  id=""
                  cols={30}
                  rows={7}
                ></textarea>
              </div>
              <div>
                <Button type="submit">HIT ME UP</Button>
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
