'use client';

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            setMessage("登入成功！");
        } catch (error: any) {
            setMessage("登入失敗！");
        }
    }

    return (
        <form onSubmit={handleLogin} className={styles.form}>
            <h1>登入帳號</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="密碼"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit">登入</button>
            {message && <p className={styles.message}>{message}</p>}
        </form>
    );
};
