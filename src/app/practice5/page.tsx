'use client'

import { useState } from "react";

export default function Practice5() {
    const [fruit, setFruit] = useState(""); // 儲存目前輸入的內容
    const [list, setList] = useState<string[]>([]);// 儲存水果清單

    function addFruit() {
        if (!fruit.trim()) return; //空白不新增
        setList([...list, fruit]); // 加入新項目
        setFruit("");              // 清空輸入欄
    }

    return (
        <main style={{ padding: "2rem" }}>
            <h1>React 練習 #5 － 新增水果到清單</h1>

            <input
                type="text"
                placeholder="輸入水果名稱"
                value={fruit}
                onChange={(e) => setFruit(e.target.value)}
                style={{ padding: "0.5rem", fontSize: "1rem", marginRight: "1rem" }}
            />

            <button onClick={addFruit}>新增</button>

            <ul style={{ marginTop: "1rem" }}>
                {list.map((item, index) => (
                    <li key={index}>
                        {index + 1}.{item}
                    </li>
                ))}
            </ul>
        </main>
    );
}