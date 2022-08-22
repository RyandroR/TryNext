import styles from '../styles/Home.module.css'
import Nav from './Nav'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <div>
        <Nav></Nav>
        <div className={styles.container}>
        <main className={styles.main}>
          <Header></Header>
            {children}
        </main>
        </div>
    </div>
  )
}

export default Layout