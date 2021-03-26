import Head from 'next/head'
import Link from 'next/link'
import {WelcomeStep} from '../components/steps/WelcomeStep'


const Home = () => {
  return (
    <div className='container'>
      <Head>
        <title>Попиздим? ;-)</title>
      </Head>
      <WelcomeStep/>
    </div>
  )
}

export default Home
