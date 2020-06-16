import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel, IonInput, IonButton } from '@ionic/react';
import React, { useState } from 'react';
import SecureStore from "expo-secure-store"
import './Home.css';

const Login : React.FC = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    async function submitLogin(this: any){

        if( username === "Ben" && password !== ""){
            this.props.route.params.login(username)
            //await SecureStore.setItemAsync("username", username);
        }
    }

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Auth</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent className="Ion-Auth">
                <IonLabel>Login</IonLabel>
                <IonInput type="text" id="login" onIonChange={(e: any) => setUsername(e.target.value)}/>

                <IonLabel>Password</IonLabel>
                <IonInput type="password" id="password" onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>

                <IonButton onClick={submitLogin}>Sign In</IonButton>
            </IonContent>
        </IonPage>
    );
}

export default Login
