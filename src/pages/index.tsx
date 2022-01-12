import type { InferGetStaticPropsType, GetStaticProps, NextPage } from 'next'

import styles from 'assets/styles/Home.module.scss'
import { Button, Container, Grid, ProjectCard } from 'components'
import { projects, Project } from '../data/projects/projects'
import { skills, Skill } from '../data/skills/skills'

const Home: NextPage = function ({
  projects,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      <section className={styles.HeroSection}>
        <Container>
          <h1 className={styles.Title}>
            Hi, I&apos;m <br />{' '}
            <span className={styles.Name}>Shaun Fitzgibbon</span> <br />{' '}
            I&apos;m a web developer
          </h1>

          <p className={styles.Description}>
            Get started by editing{' '}
            <code className={styles.Code}>pages/index.tsx</code>
          </p>
          <div>
            <Button
              isCompleted={true}
              size="Small"
              renderAs={'a'}
              href="#about-section"
            >
              About me
            </Button>{' '}
            <Button
              isLoading={true}
              size="Medium"
              renderAs={'a'}
              href="#about-section"
            >
              About me
            </Button>{' '}
            <Button size="Large" renderAs={'a'} href="#about-section">
              About me
            </Button>
          </div>
        </Container>
      </section>

      <section className={styles.AboutSection} id="about-section">
        <Container>
          <header>
            <h2 className={styles.SectionTitle}>About Me</h2>
          </header>
          <div className={styles.AboutContent}>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              dolorem, harum voluptates qui totam esse repellendus quibusdam
              omnis molestias nostrum vel nesciunt repudiandae, molestiae
              temporibus aliquam! Aliquam quaerat excepturi beatae!
            </div>
          </div>
        </Container>
      </section>

      <section className={styles.ProjectsSection} id="projects-section">
        <Container>
          <header>
            <h2 className={styles.SectionTitle}>My Projects</h2>
          </header>
          <Grid>
            {projects.map((project: Project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </Grid>
        </Container>
      </section>

      <section className={styles.SkillsSection} id="skills-section">
        <Container>
          <header>
            <h2 className={styles.SectionTitle}>Skills</h2>
          </header>
          <div>
            {skills.map((skill: Skill) => (
              <div key={skill.id}>
                <h3>{skill.name}</h3>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => ({
  props: {
    projects,
  },
})

export default Home
