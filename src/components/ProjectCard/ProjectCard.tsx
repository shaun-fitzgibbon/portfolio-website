import Image from 'next/image'
import { Project } from 'src/data/projects/projects'
import { Pill } from 'components'
import styles from './ProjectCard.module.scss'

type ProjectCardProps = {
  project: Project
}

const Card = function ({ project }: ProjectCardProps) {
  return (
    <div className={styles.card}>
      <header className={styles['card-header']}>
        <Image
          src={project.imageUrl}
          alt="screenshot"
          height={1444}
          width={2710}
        />
      </header>
      <div className={styles['card-content']}>
        <h2>{project.title}</h2>
        {project.technologies && (
          <div className={styles.Technologies}>
            {project.technologies?.map((item) => (
              <Pill key={item.id}>{item.name}</Pill>
            ))}
          </div>
        )}
        <p>{project.description}</p>
      </div>
      <footer className={styles['card-footer']}>
        <a href={project.source.url} target="_blank" rel="noreferrer">
          SOURCE
        </a>
        <a href={project.website.url} target="_blank" rel="noreferrer">
          WEBSITE
        </a>
      </footer>
    </div>
  )
}

export default Card
