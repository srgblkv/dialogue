import clsx from 'clsx'

import styles from './WhiteBlock.module.scss'

export const WhiteContainer = ({ children, className }) => {
  return <div className={clsx(styles.container, className)}>{children}</div>
}