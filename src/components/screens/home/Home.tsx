import { FC } from 'react'
import styles from './home.module.scss'
import Button from '@/components/ui/button/Button';

const Home: FC = () => {
  return (
    <div className={styles.home}>
				<Button url='game'/>
		</div>
  )
}

export default Home
