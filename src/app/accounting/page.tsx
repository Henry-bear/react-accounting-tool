'use client';

import { useState, useEffect } from "react";
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';
import { collection, addDoc, serverTimestamp, getDocs, query, where, orderBy, doc, deleteDoc, Timestamp, FieldValue } from "firebase/firestore";
import { db } from '@/lib/firebase';
import Header from '@/components/ui/Header';
import styles from './accounting.module.css';
import RecordForm from '@/components/accounting/RecordForm';
import RecordList from '@/components/accounting/RecordList';

interface RecordData {
    id?: string;          // Firebase 自動產生的 ID（新增後才會有）
    type: string;
    amount: number;
    note: string;
    uid: string | undefined;
    createdAt?: Timestamp | FieldValue;
}


export default function AccountingPage() {
    const router = useRouter();
    const [user, loading] = useAuthState(auth);
    // 儲存紀錄資料的陣列
    const [records, setRecords] = useState<RecordData[]>([]);
    // 使用者輸入值
    const [type, setType] = useState('收入');
    const [amount, setAmount] = useState('');
    const [note, setNote] = useState('');

    // 若未登入則導回首頁
    useEffect(() => {
        if (!loading && user === null) {
            router.push('/');
        }
    }, [user, router, loading]);

    // 讀取 Firestore 資料
    useEffect(() => {
        const fetchRecords = async () => {
            if (!user) return;
            const q = query(
                collection(db, 'records'),
                where('uid', '==', user.uid),
                orderBy('createdAt', 'desc')
            );
            const snapshot = await getDocs(q);
            const data = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            })) as RecordData[];
            setRecords(data);
        };
        fetchRecords();
    }, [user]);

    // 新增紀錄事件
    const handleAddRecord = async () => {
        const numAmount = parseInt(amount);
        if (isNaN(numAmount)) {
            alert("請輸入有效金額");
            return;
        }

        const newRecord = {
            type,
            amount: type === '支出' ? -Math.abs(numAmount) : Math.abs(numAmount),
            note,
            uid: user?.uid, //使用者識別
            createdAt: serverTimestamp() // 建立時間
        };

        try {
            // 新增到 FireStore
            const docRef = await addDoc(collection(db, 'records'), newRecord);

            // 更新狀態
            setRecords([{ id: docRef.id, ...newRecord }, ...records])

            // 清空欄位
            setAmount('');
            setNote('');
        } catch (err) {
            console.error('新增失敗', err);
            alert('無法儲存資料，請稍後再試');
        };
    };
    // 刪除記錄函式
    const handleDelete = async (id: string) => {
        try {
            await deleteDoc(doc(db, 'records', id)) // 刪除 Firestore 文件
            const newRecords = records.filter(record => record.id !== id); //更新前端狀態
            setRecords(newRecords);
        } catch (err) {
            console.error('刪除失敗', err);
            alert('刪除失敗，請稍後再試');
        }
    };

    // 計算總和
    const subtotal = records.reduce((total, r) => total + r.amount, 0)
    return (
        <main>
            <Header />
            <div className={styles.container}>
                {/* 輸入表單 */}
                <RecordForm
                    email={user?.email || ''}
                    type={type}
                    amount={amount}
                    note={note}
                    setType={setType}
                    setAmount={setAmount}
                    setNote={setNote}
                    handleAddRecord={handleAddRecord}
                />


                {/* 清單列表 */}
                <RecordList records={records} handleDelete={handleDelete} />


                {/* 總計區 */}
                <div className={styles.total}>
                    小計：{subtotal}
                </div>
                {/* 返回按鈕 */}
                <div className={styles.back}>
                    <button onClick={() => router.push('/')}>返回首頁</button>
                </div>
            </div >
        </main>
    );
}