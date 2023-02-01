import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonButton,IonImg } from '@ionic/react';

const Video: React.FC = () => {
    return (
        <IonPage>
          <IonHeader>Hello</IonHeader>
            <img src="../assets/test.jpeg" alt="" />

            <IonImg src="../assets/test.jpeg"></IonImg>
       
        
        </IonPage>
    );
};

export default Video;
