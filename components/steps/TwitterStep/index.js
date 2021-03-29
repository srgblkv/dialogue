import clsx from 'clsx'

import { WhiteContainer } from '../../WhiteContainer'
import { Button } from '../../Button'
import { StepInfo } from '../../StepInfo'

import styles from './TwitterStep.module.scss'

export const TwitterStep = () => {
  return (
    <div className={styles.container}>
      <StepInfo
        icon="/static/connect.png"
        title="Не желаешь импортировать данные со своего Twitter аккаунта?"
      />
      <WhiteContainer className={clsx('m-auto mt-40', styles.whiteBlock)}>
        <div className={styles.avatar}>
          <b>UN</b>
        </div>
        <h2 className="mb-40">User Name</h2>
        <Button>
          <img src="/static/twitter.svg" alt="Twitter logo" className={styles.twitterLogo}/>
          Импортировать из Twitter
          <img className="b-ib ml-10" src="/static/arrow.svg" alt=""/>
        </Button>
        <div className="link mt-20 cup d-ib">Ввести вручную</div>
      </WhiteContainer>
    </div>
  )
}