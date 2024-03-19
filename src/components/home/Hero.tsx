import Link from "next/link";
import styles from "./Hero.module.scss";

export const Hero = () => {
    return(
        <div className={styles.hero}>
            <div className={styles.ctaHero}>
                <h1>Take Your Career into the Future</h1>
                <Link href="/courses" className={styles.button}>View Topics</Link>
            </div>
        </div>
    )
}