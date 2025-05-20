import { initializeApp, cert } from 'firebase-admin/app';
import serviceAccount from "../google.json"
import { Firestore, getFirestore } from 'firebase-admin/firestore';
import { Auth, getAuth } from 'firebase-admin/auth';

let app = initializeApp({credential: cert(serviceAccount)}) 
const firestore:Firestore = getFirestore()
const _auth:Auth = getAuth()
export {firestore,_auth}

