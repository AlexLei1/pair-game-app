import {FC} from 'react';
import styles from './Layout.module.scss';

interface ILayout {
	children: React.ReactNode
}

const Layout: FC<ILayout> = ({children}) => {

	return (
		<div className={styles.layout}>
			<div className='container'>
				{children}
			</div>
		</div>
	)
}

export default Layout