'use client';

import { useState } from "react";

export default function Practice1() {
    const [text, setText] = useState("");

    return (
        <main style={{ padding: "2rem" }}>
            <h1>React 練習 #1 - 即時顯示輸入內容</h1>

            <input
                type="text"
                placeholder="請輸入一些文字"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <p>你輸入的是：{text}</p>
        </main>
    );
}