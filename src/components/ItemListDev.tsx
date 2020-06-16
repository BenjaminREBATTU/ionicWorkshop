import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonLabel,
    IonInput,
    IonButton,
    IonText,
    IonAvatar,
    IonItem,
    IonList,
    IonApp, IonRouterOutlet
} from '@ionic/react';
import React, { Component } from 'react';
import './Home.css';



const ItemListDev: React.FC = (name,description) => {
    return (
        <IonItem>
            <IonAvatar item-start>
                <img src="../../assets/imgs/logo.png"/>
            </IonAvatar>
            <h2>{name}</h2>
            <p>{description}</p>
        </IonItem>
    )
}

export default ItemListDev
