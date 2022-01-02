import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import firebase from firebase;

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA5rosWfgfnGrtTSzPUGALrSu0fZ0fBejQ",
    authDomain: "stock-monitoring-tool.firebaseapp.com",
    projectId: "stock-monitoring-tool",
    storageBucket: "stock-monitoring-tool.appspot.com",
    messagingSenderId: "464185224861",
    appId: "1:464185224861:web:eddfe9c4c2095fb9cb6e74",
    measurementId: "G-QWJTW4WQQC"
  };

firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount("#app");
