import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';



// import {initializeApp} from 'firebase/app';
// import {getFirestore} from 'firebase/firestore';

// const firebaseConfig = JSON.parse(
//     process?.env?.FIREBASE_CONFIG ?? '{}',
// );

// const app = initializeApp({...firebaseConfig, projectId: firebaseConfig?.projectId});




// import firebase from "firebase/compat/app"
// import "firebase/compat/auth"
// import "firebase/compat/firestore"
// firebase.initializeApp(firebase); // initialisiere die Firebase-Konfiguration


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
