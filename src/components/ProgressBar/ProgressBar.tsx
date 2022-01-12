import { useEffect, useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'

import styles from './ProgressBar.module.scss'

const ProgressBar = ({ progress }: { progress: number }) => {
  const [visibility, setVisibility] = useState(true)
  const shouldReduceMotion = useReducedMotion()

  const progressBarWrapperVariants = {
    hide: {
      opacity: shouldReduceMotion ? 1 : 0,
    },
    show: (visibility: boolean) => ({
      opacity: shouldReduceMotion ? 1 : visibility ? 0.7 : 0,
    }),
  }

  useEffect(
    () => setVisibility(progress >= 0.07 && progress <= 0.95),
    [progress]
  )

  return (
    <motion.div
      className={styles.Wrapper}
      initial="hide"
      variants={progressBarWrapperVariants}
      animate="show"
      transition={{ type: 'spring' }}
      custom={visibility}
    >
      <motion.div
        style={{
          transformOrigin: 'top',
          scaleY: progress,
          width: '2px',
          backgroundColor: 'var(--maximeheckel-colors-typeface-2)',
          height: '100%',
        }}
        data-testid="progress-bar"
        data-testprogress={progress}
      />
    </motion.div>
  )
}

export default ProgressBar
