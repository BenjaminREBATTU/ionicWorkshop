import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonAvatar,
    IonItem,
    IonList,
} from '@ionic/react';
import React from 'react';


const ListDev: React.FC = () => {
    const dev = [
        {
            name:'Woody',
            description:'Back off man, I\'m a scientist.'
        },
        {
            name:'Flinn',
            description:'We\'re gonna go full stream.'
        },
        {
            name:'Jessy',
            description:'Okay, who brought the dog?'
        }
    ];

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Liste des Devs</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonList>
                    { dev.map((item) => (
                        <IonItem>
                            <IonAvatar>
                                <img src="../../assets/imgs/logo.png"/>
                            </IonAvatar>
                            <h2>{item.name}</h2>
                            <p>{item.description}</p>
                        </IonItem>
                    ))}
                </IonList>
            </IonContent>
        </IonPage>
    )
}

export default ListDev
