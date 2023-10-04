import { ConfigProvider } from 'antd'
import { Button } from 'antd'

import styles from './App.module.scss'

import '@/styles/index.scss'

const App = (): JSX.Element => {
  return (
    <ConfigProvider>
      <main className={styles.mainContainer}>
        <menu>
          <ul>
            <Button type={'primary'}>Strona główna</Button>
            <Button type={'primary'}>Kontakty</Button>
            <Button type={'primary'}>Produkty</Button>
            <Button type={'primary'}>Lokalne sklepy</Button>
          </ul>
        </menu>

        <section>Zawartość strony głównej</section>
      </main>
    </ConfigProvider>
  )
}

export default App
