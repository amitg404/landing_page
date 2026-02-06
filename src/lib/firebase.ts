import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { getFirestore, collection, addDoc, Timestamp } from 'firebase/firestore';

// TODO: Replace with your Firebase config
// Get these values from Firebase Console → Project Settings → General → Your apps
const firebaseConfig = {
  apiKey: "AIzaSyBhHewjTq7Yo_Jvy1Jjs-bDOh8-0tXVSD0",
  authDomain: "landing-page-medvora.firebaseapp.com",
  projectId: "landing-page-medvora",
  storageBucket: "landing-page-medvora.firebasestorage.app",
  messagingSenderId: "716215201700",
  appId: "1:716215201700:web:31440ef8010cf7c6f9db31"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();

// Auth functions
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    return result.user;
  } catch (error) {
    console.error('Error signing in with Google:', error);
    throw error;
  }
};

// Firestore functions
export const saveBetaSignup = async (email: string, type: 'student_beta' | 'doctor_interest') => {
  try {
    const docRef = await addDoc(collection(db, 'beta_signups'), {
      email,
      type,
      timestamp: Timestamp.now()
    });
    return docRef.id;
  } catch (error) {
    console.error('Error saving signup:', error);
    throw error;
  }
};
