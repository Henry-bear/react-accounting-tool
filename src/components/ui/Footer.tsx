import styles from './Footer.module.css';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className={styles.footer}>
            <p>© {year} React 練習專案 All rights reserved.</p>
        </footer>
    )
}