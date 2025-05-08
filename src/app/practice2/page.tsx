'use client';

import { useState } from "react";

export default function Practice2() {
    const [count, setCount] = useState(0);

    function increase() {
        setCount(count + 1);
    }

    function decrease() {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    function reset() {
        setCount(0);
    }
    return (
        <main style={{ padding: "2rem" }}>
            <h1>React 練習 #2 挑戰題 - 計數器進階</h1>

            <p>目前數字：{count}</p>

            <div style={{ display: "flex", gap: "1rem" }}>
                <button onClick={increase}>+1</button>

                <button
                    onClick={decrease}
                    disabled={count <= 0}
                    style={{
                        backgroundColor: count <= 0 ? "#ccc" : "#eee",
                        cursor: count <= 0 ? "not allowed" : "pointer"
                    }}>-1</button>

                <button onClick={reset}>重設數字</button>
            </div>
        </main>
    );
}