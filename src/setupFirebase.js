import * as firebase from "firebase/app";

import "firebase/messaging";
import "firebase/firestore";
export default function setup(actions) {
    return new Promise((resolve, reject) => {
        const firebaseConfig = {
            apiKey: "AIzaSyCkTbaceETiUUe7FWfE9tKugIWvygTtRB0",
            authDomain: "qathena-4cabd.firebaseapp.com",
            databaseURL: "https://qathena-4cabd.firebaseio.com",
            projectId: "qathena-4cabd",
            storageBucket: "qathena-4cabd.appspot.com",
            messagingSenderId: "354305086624",
            appId: "1:354305086624:web:f922344740a624eb"
        };

        firebase.initializeApp(firebaseConfig);

        const messaging = firebase.messaging();
        messaging.usePublicVapidKey("BEOylfehZ1Qv3uRw7k3ie7a_x6rBfUMzNLcloGs59CCuoLTe4JLgQhxVL4UOsjDsWxd3j9_yTgTLgP4mm8757sg");

        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                console.log('Notification permission granted.');
                // TODO(developer): Retrieve an Instance ID token for use with FCM.
                // ...
            } else {
                console.log('Unable to get permission to notify.');
            }
        });


        messaging.getToken().then((currentToken) => {
            if (currentToken) {
                console.log('token', currentToken)
                resolve(currentToken)
                // localStorage.setItem("FB_TOKEN", currentToken);
                // sendTokenToServer(currentToken);
                // updateUIForPushEnabled(currentToken);
            } else {
                // Show permission request.
                console.log('No Instance ID token available. Request permission to generate one.');
                reject()
                // Show permission UI.
                // updateUIForPushPermissionRequired();
                // setTokenSentToServer(false);
            }
        }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
            // showToken('Error retrieving Instance ID token. ', err);
            // setTokenSentToServer(false);
        });


        messaging.onTokenRefresh(() => {
            messaging.getToken().then((refreshedToken) => {
                console.log('Token refreshed.');
                // Indicate that the new Instance ID token has not yet been sent to the
                // app server.
                // setTokenSentToServer(false);
                // Send Instance ID token to app server.
                // sendTokenToServer(refreshedToken);
                // ...
            }).catch((err) => {
                console.log('Unable to retrieve refreshed token ', err);
                // showToken('Unable to retrieve refreshed token ', err);
            });
        });

        messaging.onMessage((payload) => {
            console.log('Message received. ', payload);
            actions.receivedMessage(payload)
            // ...
        });
    })
}