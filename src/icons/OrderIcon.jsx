import React from 'react'
import styles from './Icon.module.css'

const OrderIcon = () => {
	//{...props}
	return (
		<svg width='24' height='24' viewBox='0 0 24 24' fill='none' className={styles.svg}>
			<path
				d='M8 12.2H15'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeMiterlimit='10'
				strokeLinecap='round'
				strokeLinejoin='round'></path>
			<path
				d='M8 16.2H12.38'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeMiterlimit='10'
				strokeLinecap='round'
				strokeLinejoin='round'></path>
			<path
				d='M10 6H14C16 6 16 5 16 4C16 2 15 2 14 2H10C9 2 8 2 8 4C8 6 9 6 10 6Z'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeMiterlimit='10'
				strokeLinecap='round'
				strokeLinejoin='round'></path>
			<path
				d='M16 4.02002C19.33 4.20002 21 5.43002 21 10V16C21 20 20 22 15 22H9C4 22 3 20 3 16V10C3 5.44002 4.67 4.20002 8 4.02002'
				stroke='currentColor'
				strokeWidth='1.5'
				strokeMiterlimit='10'
				strokeLinecap='round'
				strokeLinejoin='round'></path>
		</svg>
	)
}

export default OrderIcon
