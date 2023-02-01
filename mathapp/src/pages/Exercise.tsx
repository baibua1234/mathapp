import { IonCardContent, IonCardHeader, IonCardSubtitle, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonCardTitle, IonCard, IonFooter, IonIcon, IonFab, IonFabButton  } from '@ionic/react';
import "./Menu.css"
import all from '../assets/images/one.png'
import ant from '../assets/images/two.png'
import cat from '../assets/images/three.png'


import {Link } from "react-router-dom"
import { add } from 'ionicons/icons';
const Menu: React.FC = () => {
    return (
    <div className='container-1'> 
        
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    
                <IonCardTitle>
                        
                        <IonTitle color="dark">แบบฝึกหัด</IonTitle>

                </IonCardTitle>
                
                <IonCardContent>
                    <img src="video-chat.png" alt="" />
                </IonCardContent>
            
                </IonToolbar>

        </IonHeader>
            <IonCard style={{backgroundColor: '#B4A48E'}}>
                <IonCardHeader>
                    <IonCardTitle>
                        <div className='ion-text-center'>
                            <IonButton href='/number' fill='clear' color="dark">การนับเลข</IonButton>
                            <img src={all} alt=""  width={"20%"} height={"20%"}/>                             
                        </div>
                    </IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <img src="video-chat.png" alt="" />
                </IonCardContent>
            </IonCard>

            <IonCard style={{backgroundColor: '#B4A48E'}}>
                <IonCardHeader>
                    <IonCardTitle>
                    <div className='ion-text-center'>

                        <IonButton href='/plusminus' fill='clear' color="dark">บวกลบเลข</IonButton>
                        <img src={ant} alt=""  width={"20%"} height={"20%"}/> 
                    </div>
                    </IonCardTitle>

                </IonCardHeader>

                <IonCardContent>
                    <img src="" alt="" />
                </IonCardContent>
            </IonCard>

            <IonCard style={{backgroundColor: '#B4A48E'}}>
                <IonCardHeader>
                    <IonCardTitle>
                        <div className='ion-text-center'>
                            <IonButton href='/paintnumber' fill='clear' color="dark">จับคู่ตามจำนวน</IonButton>
                            <img src={cat} alt=""  width={"20%"} height={"20%"}/> 
                        </div>
                    </IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <img src="" alt="" />
                </IonCardContent>
            </IonCard>



        </IonPage>

    </div>
        
    );
};

export default Menu;