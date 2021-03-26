import { Button } from '../../Button'
import { WhiteContainer } from '../../WhiteContainer'

import styles from './WelcomeStep.module.scss'

export const WelcomeStep = () => {
  return (
    <WhiteContainer className={styles.container}>
      <h3 className={styles.title}>
        <img className={styles.handWaveImg} src="/static/hand-wave.png" alt="ico"/>
        Здарова!
      </h3>
      <p>
        Этот сайт - голосовой чат. Создавай приватные комнаты и веди интересные диалоги с действительно
        интересными тебе собеседниками.
      </p>
      <div>
        <Button>
          Войти!
          <img className="d-ib ml-10" src="/static/arrow.svg" height="15px"/>
        </Button>
      </div>
      <div className="link mt-15 cup d-ib">
        Впервые здесь? Создай аккаунт
      </div>
    </WhiteContainer>
  )
}