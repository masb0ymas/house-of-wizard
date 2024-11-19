import { initFirestore } from '@auth/firebase-adapter'
import { cert } from 'firebase-admin/app'
import { env } from './env'

export const firestore = initFirestore({
  credential: cert({
    projectId: env.FIREBASE_PROJECT_ID,
    clientEmail: env.FIREBASE_CLIENT_EMAIL,
    privateKey: env.FIREBASE_PRIVATE_KEY,
  }),
})
