'use client'

import Header from '@/components/ui/Header';
import Hero from '@/components/ui/Hero';
import Button from '@/components/ui/Button';
import Footer from '@/components/ui/Footer';
import styles from './practice6.module.css';

export default function Practice6() {
    // 點下按鈕後
    const handleClick = () => {
        alert("你成功點擊到按鈕！");
    }
    return (
        <main className={styles.pageContainer}>
            <div className={styles.grow}>
                <Header />
                <Hero />
                <section style={{ textAlign: "center" }}>
                    <Button label='我是按鈕 快點我' onClick={handleClick} />
                </section>
            </div>
            <Footer />
        </main>
    );
}