import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonText,
    IonAvatar,
} from '@ionic/react';
import React from 'react';


const ProfilPage: React.FC = () => {
    const username = 'Benjamin'

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Profile Page of : {username}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>

                <IonAvatar>
                    <img src="../../assets/imgs/logo.png"/>
                </IonAvatar>

                <IonText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis posuere quis elit sollicitudin hendrerit.
                    Duis sem sapien, lacinia a viverra sed, finibus vitae ipsum.
                    Donec volutpat quam ex, sit amet interdum tellus viverra in.
                </IonText>

                <IonButton routerLink="/listdev">Liste des développeurs</IonButton>
                <IonButton>Liste des projets</IonButton>

            </IonContent>
        </IonPage>
    )
}

export default ProfilPage
