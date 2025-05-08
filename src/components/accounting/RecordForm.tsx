'use client';

import styles from './RecordForm.module.css';

interface RecordFormProps {
    email: string;
    type: string;
    amount: string;
    note: string;
    setType: (type: string) => void;
    setAmount: (amount: string) => void;
    setNote: (note: string) => void;
    handleAddRecord: () => void;
}

export default function RecordForm({
    email,
    type,
    amount,
    note,
    setType,
    setAmount,
    setNote,
    handleAddRecord
}: RecordFormProps) {
    return (
        <><p style={{ textAlign: 'center', marginBottom: '1rem', fontSize: "19px" }}>
            已使用：{email} 登入
        </p>

            <div className={styles.inputRow}>
                <select value={type} onChange={(e) => setType(e.target.value)} className={styles.input}>
                    <option value="收入">收入</option>
                    <option value="支出">支出</option>
                </select>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="金額"
                    className={styles.input}
                />
                <input
                    type="text"
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder="說明"
                    className={styles.input}
                />
                <button onClick={handleAddRecord} className={styles.button}>
                    新增紀錄
                </button>
            </div>
        </>
    );
}
