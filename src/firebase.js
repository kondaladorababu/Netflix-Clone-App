import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDJmdzam0FbY566jcEDoP3BIyrCknmpTWM",
    authDomain: "netflix-clone-project-b1eac.firebaseapp.com",
    projectId: "netflix-clone-project-b1eac",
    storageBucket: "netflix-clone-project-b1eac.appspot.com",
    messagingSenderId: "113219501827",
    appId: "1:113219501827:web:bc50f268f389f82b97b336"
};

const app = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth(app);

export { auth };
// export default db;
