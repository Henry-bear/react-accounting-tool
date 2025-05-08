'use client'

import { useState } from "react";

export default function Practice4() {
    const fruits = ["蘋果", "香蕉", "芒果", "草莓", "葡萄"];

    const emojis = ["🍎", "🍌", "🥭", "🍓", "🍇"];

    function getColor(index: number) {
        if (index === 0) return "gold";
        if (index === 1) return "silver";
        if (index === 2) return "#cd7f32"; // bronze
        return "#666";
    }

    return (
        <main style={{ padding: "2rem" }}>
            <h1>React 練習 #4 － 水果排行榜</h1>

            <ul style={{ listStyle: "none", padding: "0" }}>
                {fruits.map((fruit, index) => (
                    <li
                        key={index}
                        style={{
                            fontSize: "1.2rem",
                            marginBottom: "0.5rem",
                            color: getColor(index),
                        }}
                    >
                        {index + 1}.{emojis[index]} {fruit}
                    </li>
                ))}
            </ul>
        </main>
    );
}