'use client';

import { useRouter } from 'next/navigation';
import { auth } from '@/lib/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import styles from "./LoginStatus.module.css";

export default function LoginStatus() {
    const [user] = useAuthState(auth);
    const router = useRouter();

    if (!user) return null;

    return (
        <div className={styles.container}>
            <p>已經使用：{user.email} 登入</p>
            <button
                className={styles.button}
                onClick={() => router.push('/accounting')}
            >
                立即開始
            </button>
            <button
                className={styles.button}
                onClick={async () => {
                    await auth.signOut();
                    window.location.reload();
                }}
            >
                登出
            </button>
        </div>
    );
}
