import { IonCardContent, IonCardHeader,  IonHeader, IonPage, IonText, IonToolbar, IonButton, IonCardTitle, IonCard, IonImg } from '@ionic/react';
import "./Menu.css"
import exercise from '../assets/images/exercise.png'
import video from '../assets/images/video.png'
import game from '../assets/images/game.png'
import menu from '../assets/images/shapes.png'
const Menu: React.FC = () => {
    return (
        
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    
                <IonText>
                    <h1>MENU</h1> 
                    <img src={menu} alt=""  />             
                 </IonText>
            
                </IonToolbar>
            </IonHeader>
            
            {/* item1 */}
            <IonCard className='card-data' href='/video' style={{backgroundColor: '#B4A48E'}}>
                <IonCardHeader>
                    <IonCardTitle>
                        <div className='ion-text-center'>
                     <IonText>
                        <h4 color="warning">วีดีโอสื่อการสอน</h4> 
                      <img src={video} alt=""  />             
                    </IonText>                          
                        </div>
                    </IonCardTitle>
                </IonCardHeader>               
            </IonCard>

            {/* item2 */}
            <IonCard href='/exercise' style={{backgroundColor: '#B4A48E'}}>
                <IonCardHeader>
                    <IonCardTitle>
                        <div className='ion-text-center'>
                     <IonText>
                        <h4 color="warning">แบบฝึกหัด</h4> 
                      <img src={exercise} alt=""  />             
                    </IonText>                          
                        </div>
                    </IonCardTitle>
                </IonCardHeader>               
            </IonCard>

            {/* item3 */}
            <IonCard href='/game' style={{backgroundColor: '#B4A48E'}}>
                <IonCardHeader>
                    <IonCardTitle>
                        <div className='ion-text-center'>
                     <IonText>
                        <h4 color="warning">เกม</h4> 
                      <img src={game} alt=""  />             
                    </IonText>                          
                        </div>
                    </IonCardTitle>
                </IonCardHeader>               
            </IonCard>
            
        </IonPage>
    );
};

export default Menu;