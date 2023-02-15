import { initializeApp } from "firebase/app";
import { firstValueFrom, map, of, shareReplay, switchMap } from "rxjs";
import { authState } from "rxfire/auth";
import {
  getAuth,
  signInAnonymously,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  connectAuthEmulator,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  collection,
  addDoc,
  setDoc,
  deleteDoc,
  getDoc,
  connectFirestoreEmulator,
  orderBy,
  query,
  limit
} from "firebase/firestore";
import { connectFunctionsEmulator, getFunctions, httpsCallable } from "firebase/functions";
import { getStorage } from "firebase/storage";
import { collectionData, docData } from "rxfire/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDOcbeGcrzeqkReqpso6kQqNwdIVvRFpdA",
    authDomain: "afropolska-a7fd5.firebaseapp.com",
    projectId: "afropolska-a7fd5",
    storageBucket: "afropolska-a7fd5.appspot.com",
    messagingSenderId: "993348098177",
    appId: "1:993348098177:web:1425db1b3d014975511580",
    measurementId: "G-Q3XPLS5CXV"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);
export const storage = getStorage(app);
export const fireAuthState = authState(auth);



// SETTINGS

export const getSettings = () => {
    const ref = doc(db, `settings/M8LGkY0btC1j8rY82ijB`);
    return docData(ref, "id");
  };
  
  export const editSettings = (valueFields) => {
    const ref = doc(db, `settings/M8LGkY0btC1j8rY82ijB`);
    return setDoc(ref, valueFields, { merge: true });
  };
  
  export const getAbout = () => {
    const ref = doc(db, `about/bpnLP3mjgSN3OMCY8p2f`);
    return docData(ref, "id");
  };
  
  export const editAbout = (valueFields) => {
    const ref = doc(db, `about/bpnLP3mjgSN3OMCY8p2f`);
    return setDoc(ref, valueFields, { merge: true });
  };
  

  // Events
export const get3Events = () => {
  const ref = collection(db, "event");
  const q = query(ref, orderBy("Created_on", "desc"), limit(3))
  return collectionData(q, { idField: "id" });
};

export const getEvents = () => {
  const ref = collection(db, "event");
  const q = query(ref, orderBy("Created_on", "desc"))
  return collectionData(q, { idField: "id" });
};

export const createEvent = (event) => {
  const ref = collection(db, "event");
  return addDoc(ref, event);
};

export const getOneEvent = (id) => {
  const ref = doc(db, `event/${id}`);
  return docData(ref, { idField: "id" });
};

export const deleteEvent = (id) => {
  const ref = doc(db, `event/${id}`);
  return deleteDoc(ref, id);
};

export const editEvent = (id, valueFields) => {
  const ref = doc(db, `event/${id}`);
  return setDoc(ref, valueFields, { merge: true });
};

// Gallery
export const getGallery = () => {
  const ref = collection(db, "gallery");
  return collectionData(ref, { idField: "id" });
};

export const createGallery = (gallery) => {
  const ref = collection(db, "gallery");
  return addDoc(ref, gallery);
};

export const deleteGallery = (id) => {
  const ref = doc(db, `gallery/${id}`);
  return deleteDoc(ref, id);
};

// Team
export const getTeam = () => {
  const ref = collection(db, "team");
  return collectionData(ref, { idField: "id" });
};

export const createTeam = (team) => {
  const ref = collection(db, "team");
  return addDoc(ref, team);
};

// Newsletter

export const createNewsletter = (newsletter) => {
  const ref = collection(db, "newsletter");
  return addDoc(ref, newsletter);
};

// Contact

export const createContact = (contact) => {
  const ref = collection(db, "contact");
  return addDoc(ref, contact);
};

//images
export const saveImage = (images) => {
  console.log(images);
  const ref = collection(db, "images");
  return addDoc(ref, images);
};

export const getimageFromFirebase = () => {
  const ref = collection(db, "images");
  return collectionData(ref, { idField: "id" });
};

export const deleteImage = async (id, path) => {
  const ref = doc(db, `images/${id}`);
  await deleteDoc(ref);
  return await storage.ref(`${path}`).delete();
}