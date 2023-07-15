import {FC} from 'react';
import styles from './Layout.module.scss';

interface ILayout {
	children: React.ReactNode
}

const Layout: FC<ILayout> = ({children}) => {

	return (
		<div className={styles.layout}>
			<header>
				HEADER
			</header>

			<div className='container'>
				{children}
			</div>

			<footer>
				FOOTER
			</footer>
		</div>
	)
}

export default Layout