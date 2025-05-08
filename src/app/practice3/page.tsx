'use client';

import { useState } from "react";

export default function Practice3() {
    const [isOn, setIsOn] = useState(false)

    const bgColor = isOn ? "#fffbe6" : "#1e293b";
    const textColor = isOn ? "#333" : "#eee";
    const btnColor = isOn ? "#ffa500" : "#3b82f6";

    function toggle() {
        setIsOn(!isOn); // true ↔ false 切換
    }

    return (
        <main
            style={{
                padding: "2rem",
                backgroundColor: bgColor,
                minHeight: "100vh",
                color: textColor,
                transition: "all 0.3 ease"
            }}
        >
            <h1>React 練習 #4 - 開關切換 (進階）</h1>
            <p style={{ fontSize: "1.2rem" }}>
                {isOn ? "🔆 現在是開啟狀態" : "🌙 現在是關閉狀態"}
            </p>

            <button
                onClick={toggle}
                style={{
                    backgroundColor: btnColor,
                    color: "white",
                    padding: "10px 20px",
                    border: "none",
                    cursor: "pointer",
                    borderRadius: "8px",
                    marginTop: "1rem"
                }}>點我切換開關</button>
        </main>
    );
}