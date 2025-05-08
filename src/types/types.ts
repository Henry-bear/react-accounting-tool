import { Timestamp, FieldValue } from 'firebase/firestore';

export interface RecordData {
    id?: string;
    type: string;
    amount: number;
    note: string;
    uid: string | undefined;
    createdAt?: Timestamp | FieldValue;
}
