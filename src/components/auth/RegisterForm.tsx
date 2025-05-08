'use client';

import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import styles from "./RegisterForm.module.css";

export default function RegisterForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault(); // 防止頁面重整
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            setMessage("註冊成功！")
        } catch (error: any) {
            setMessage("註冊失敗！");
        }
    };
    return (
        <form onSubmit={handleRegister} className={styles.form}>
            <h1>註冊帳號</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required />
            <input
                type="password"
                placeholder="密碼"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required />
            <button type="submit">註冊</button>
            {message && <p className={styles.message}>{message}</p>}
        </form>
    )
};