'use client';

import styles from './RecordList.module.css';
import { RecordData } from '../../types/types';


interface RecordListProps {
    records: RecordData[];
    handleDelete: (id: string) => void;
}


export default function RecordList({ records, handleDelete }: RecordListProps) {
    return (
        <div className={styles.listContainer}>
            {records.map((record) => (
                <div
                    key={record.id}
                    className={`${styles.recordItem} ${record.amount > 0 ? styles.income : styles.expense}`}
                >
                    <span>{record.note}：{record.amount}</span>
                    <button onClick={() => handleDelete(record.id!)} className={styles.button}>刪除</button>
                </div>
            ))}
        </div>
    );
}
