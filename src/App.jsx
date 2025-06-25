import styles from './App.module.css'
import { Header } from './components/Header/Header'
import { About } from './components/About/About'
import { Projects } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'

function App() {

  return (
    <div className={styles.App}>
      <Header/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
