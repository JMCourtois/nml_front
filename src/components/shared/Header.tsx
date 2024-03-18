'use client'
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Header.module.scss";


export const Header = () => {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setHasScrolled(window.scrollY > 0);
        window.addEventListener('scroll', onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return(
        <header className={styles.header}>
            <div className={`${styles.backgroundLayer} ${hasScrolled ? styles.scrolled : ''}`}></div>
            <ul className={hasScrolled ? styles.scrolled : ''}>
                <Link className={styles.menuLogo} href="/">
                    <img src="/NML-dark.png" alt="logo" />
                </Link>

                <Link className={styles.menuLink} href="/cognition">
                    <li>Cognitive</li>
                </Link>

                <Link className={styles.menuLink} href="/selfandsocial">
                    <li>Self & Social</li>
                </Link>

                <Link className={styles.menuLink} href="/technical">
                    <li>Technical</li>
                </Link>

                <Link className={styles.cta} href="/support">
                    <li >Support</li>
                </Link>
            </ul>
        </header>
    )
}