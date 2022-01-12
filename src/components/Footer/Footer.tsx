import { Container, Logo, ContactForm, SocialFollowMe } from 'components'
import styles from './Footer.module.scss'

const Footer = function () {
  const date = new Date()
  const year = date.getFullYear()

  return (
    <footer className={styles.Footer} id="contact-section">
      <Container>
        <div className={styles.TopContent}>
          <Logo />
        </div>
        <div className={styles.MiddleContent}>
          <div className={styles.Column}>
            <h2 className={styles.ColumnHeader}>Follow Me</h2>
            <SocialFollowMe />
          </div>
          <div className={styles.Column}>
            <h2 className={styles.ColumnHeader}>Header</h2>
          </div>
          <div className={styles.Column}>
            <h2 className={styles.ColumnHeader}>Get in Contact</h2>
            <ContactForm />
          </div>
        </div>
      </Container>
      <div className={styles.BottomWrapper}>
        <Container>
          <div className={styles.BottomContent}>
            <div className={styles.Copywrite}>
              &copy; {year} - Shaun Fitzgibbon
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}

export default Footer
