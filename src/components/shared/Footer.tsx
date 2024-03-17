import Link from 'next/link';
import styles from './Footer.module.scss';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                {/* Logo and Description */}
                <div className={styles.logoSection}>
                    <img src="/NML-dark.png" alt="Logo"/>
                    <p>High quality coding education maintained by an open source community.</p>
                </div>


                <div className={styles.linksSection}>
                    <div className={styles.linkColumn}>
                        <h3>About us</h3>
                        <Link href="/about">About</Link>
                        <Link href="/team">Team</Link>
                        <Link href="/blog">Blog</Link>
                        <Link href="/success-stories">Success Stories</Link>
                    </div>
                    <div className={styles.linkColumn}>
                        <h3>Support</h3>
                        <Link href="/faq">FAQ</Link>
                        <Link href="/contribute">Contribute</Link>
                        <Link href="/contact">Contact us</Link>
                    </div>
                    <div className={styles.linkColumn}>
                        <h3>Guides</h3>
                        <Link href="/community-guides">Community guides</Link>
                        <Link href="/installation-guides">Installation guides</Link>
                    </div>
                    <div className={styles.linkColumn}>
                        <h3>Legal</h3>
                        <Link href="/terms">Terms</Link>
                        <Link href="/privacy">Privacy</Link>
                    </div>
                </div>
            </div>

            {/* Social Media Icons */}
            <div className={styles.socialMediaSection}>
                <div className={styles.socialMediaSection}>
                    {/* GitHub Icon */}
                    <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                        <img src="/github.svg" alt="GitHub" className={styles.socialIcon} />
                    </a>

                    {/* Facebook Icon */}
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                        <img src="/facebook.svg" alt="Facebook" className={styles.socialIcon} />
                    </a>

                    {/* Twitter Icon */}
                    <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                        <img src="/twitter.svg" alt="Twitter" className={styles.socialIcon} />
                    </a>
                </div>
            </div>

            {/* Copyright Notice */}
            <div className={styles.copyRight}>
                © 2024 Next Mind Labs. All rights reserved.
            </div>
        </footer>
    );
};

