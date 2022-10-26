import { useState } from 'react'
import reactLogo from './assets/react.svg'

import Header from './components/header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';
import styles from './divComponent.module.css';
function App() {
  return (
    <div className={`${styles.app}`}>
      <Header/>
      <div className = {styles.container}>
        <Navigation/>
        <Main>
          <div className={styles.row}>
            <SubContents/>
            <SubContents/>
            <SubContents/>
          </div>
          <div>
            <Advertisement/>
          </div>
        </Main>
      </div>
    </div>
  )
}

export default App
