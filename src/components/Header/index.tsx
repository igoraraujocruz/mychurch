import styles from './styles.module.scss'
import { ActiveLink } from '../ActiveLink';

export function Header() {

	return (
		<header className={styles.headerContainer}>
			<div className={styles.headerContent}>
				<img src="/images/logo.svg" alt="ig.news" />
				<nav>
					<ActiveLink activeClassName={styles.active} href="/">
						<a>Home</a>
					</ActiveLink>
					<ActiveLink activeClassName={styles.active} href="/tes">
						<a>Quem Somos</a>
					</ActiveLink>
					<ActiveLink activeClassName={styles.active} href="/tes1">
						<a>Como Participar</a>
					</ActiveLink>
				</nav>				
			</div>
		</header>		
	);
}