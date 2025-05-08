'use client';

import { useState } from "react";

export default function AccountingPage() {
    // 儲存紀錄資料的陣列
    const [records, setRecords] = useState([
        { id: 1, type: '支出', amount: -1200, note: '吃大餐' },
        { id: 2, type: '支出', amount: -500, note: '咖啡十杯' },
        { id: 3, type: '支出', amount: -200, note: '生活用品' },
        { id: 4, type: '收入', amount: 50000, note: '十月份薪資' }
    ]);
    // 使用者輸入值
    const [type, setType] = useState('收入');
    const [amount, setAmount] = useState('');
    const [note, setNote] = useState('');

    // 新增紀錄事件
    const handleAddRecord = () => {
        const numAmount = parseInt(amount);
        if (isNaN(numAmount)) {
            alert("請輸入有效金額");
            return;
        }

        const newRecord = {
            id: Date.now(),
            type,
            amount: type === '支出' ? -Math.abs(numAmount) : Math.abs(numAmount),
            note
        };
        // 將新資料加入 records 陣列
        setRecords([newRecord, ...records]);
        // 清空輸入欄
        setAmount('');
        setNote('');
    };
    // 刪除記錄函式
    const handleDelete = (id: number) => {
        const newRecords = records.filter(record => record.id !== id);
        setRecords(newRecords);
    }

    // 計算總和
    const subtotal = records.reduce((total, r) => total + r.amount, 0)
    return (
        <div style={{ padding: "2rem", maxWidth: '600px', margin: '0 auto' }}>
            {/* 輸入區 */}
            <div style={{ marginBottom: "1rem" }}>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="收入">收入</option>
                    <option value="支出">支出</option>
                </select>
                <input
                    type="number"
                    value={amount}
                    placeholder="金額"
                    onChange={(e) => setAmount(e.target.value)}
                    style={{ marginLeft: '0.5rem' }} />
                <input
                    type="text"
                    value={note}
                    placeholder="說明"
                    onChange={(e) => setNote(e.target.value)}
                    style={{ marginLeft: '0.5rem' }} />
                <button onClick={handleAddRecord} style={{ marginLeft: '0.5rem' }}>新增紀錄</button>
            </div>

            {/* 清單列表（MAP) */}
            {records.map(record => (
                <div
                    key={record.id}
                    style={{
                        color: record.amount > 0 ? "green" : "brown",
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: '0.5rem'
                    }}>
                    <span>{record.amount} {record.note}</span>
                    <button onClick={() => handleDelete(record.id)}>刪除</button>
                </div>
            ))}

            {/* 小記區 */}
            <div style={{ marginTop: '2rem', fontWeight: 'bold' }}>
                小記：{subtotal}
            </div>
            {/* 返回按鈕 */}
            <div style={{ marginTop: '1rem' }}>
                <button>返回首頁</button>
            </div>
        </div >
    );
}