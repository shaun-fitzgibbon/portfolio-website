import styles from './Card.module.css'

const Card = ({ project }: any) => {
  return (
    <div className={styles.card}>
      <h2>{project.title}</h2>
      <p>{project.description}</p>

      <a href={project.source.url} target="_blank" rel="noreferrer">
        SOURCE
      </a>
      <a href={project.website.url} target="_blank" rel="noreferrer">
        WEBSITE
      </a>
    </div>
  )
}

export default Card
