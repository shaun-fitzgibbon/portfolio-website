import Image from 'next/image'
import { Project } from 'src/data/data.types'
import styles from './ProjectCard.module.scss'

interface ProjectCardProps {
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
