import { FC } from 'react';
import styles from './Button.module.scss'
interface IButton {
	url: string,
}

const Button:FC<IButton> = ({url}) => {
	return (
		<div className={styles.button}>
			<button><a href={'/' + url}>{url}</a></button>
		</div>
	)
}

export default Button