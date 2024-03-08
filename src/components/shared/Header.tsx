import Link from "next/link";
import styles from "./Header.module.scss";


export const Header = () => {
    return(
        <header className={styles.header}>
            <nav>
                <ul>
                    <Link href="/">
                        <li>Home</li>
                    </Link>

                    <Link href="/cognition">
                        <li>Cognitive</li>
                    </Link>

                    <Link href="/selfandsocial">
                        <li>Self & Social</li>
                    </Link>

                    <Link href="/technical">
                        <li>Technical</li>
                    </Link>

                    <Link className={styles.cta} href="/support">
                        <li >Support</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}