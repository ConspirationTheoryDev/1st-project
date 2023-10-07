import { Radio } from 'antd'
import styles from './Category.module.scss'

export const Category = (): JSX.Element => {
  return (
    <Radio.Group className={styles.group}>
      <Radio.Button className={styles.button} value="women">
        Kobieta
      </Radio.Button>
      <Radio.Button className={styles.button} value="men">
        Mężczyzna
      </Radio.Button>
      <Radio.Button className={styles.button} value="kid">
        Dziecko
      </Radio.Button>
    </Radio.Group>
  )
}
