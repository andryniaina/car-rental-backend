import admin from "firebase-admin";
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

const initFirestore = () => {
  if (!admin.apps.length) {
    // Parse the service account key from the .env variable
    const serviceAccount = JSON.parse(
      process.env.FIREBASE_SERVICE_ACCOUNT_KEY as string
    );

    initializeApp({
      credential: cert(serviceAccount),
    });
  }

  return getFirestore();
};

// Export Firestore instance
export const db = initFirestore();
