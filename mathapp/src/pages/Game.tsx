import { IonCardContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonButton, IonCardHeader, IonCardTitle, IonCard, IonText } from '@ionic/react';
import "./Game.css"
import backth from '../assets/images/backth.png'
import nextth from '../assets/images/nextth.png'
import puzzle from '../assets/images/puzzle.png'
import mushroom from '../assets/images/mushroom.png'
import canvas from '../assets/images/canvas.png'
import games from '../assets/images/games.png'
const Game: React.FC = () => {
    return (
        <IonPage>
          <IonHeader>
                <IonToolbar style={{backgroundColor: '#DDBD69'}}>
                    <IonText>
                        <h1>เกม</h1> 
                        <img src={games} alt="" width="80" height="80" />           
                    </IonText>
            
                </IonToolbar>
            </IonHeader>

          <IonCard className='card-data' href='/Gameimage' style={{backgroundColor: '#DDBD69'}}>
                <IonCardHeader>
                    <IonCardTitle>
                        <div className='ion-text-center'>
                     <IonText>
                        <h4 color="warning">เกมนับจำนวนรูปภาพ</h4>
                        <img src={mushroom} alt="" width="80" height="80"  /> 
                      </IonText>                          
                        </div>
                    </IonCardTitle>
                </IonCardHeader>               
            </IonCard>

            <IonCard className='card-data' href='/Gameopenimage' style={{backgroundColor: '#DDBD69'}}>
                <IonCardHeader>
                    <IonCardTitle>
                        <div className='ion-text-center'>
                     <IonText>
                        <h4 color="warning">เกมเปิดภาพหาจำนวนที่เท่ากัน</h4>
                        <img src={canvas} alt="" width="80" height="80"  /> 
                      </IonText>                          
                        </div>
                    </IonCardTitle>
                </IonCardHeader>               
            </IonCard>

            <IonCard  className='card-footer' style={{backgroundColor: '#DDBD69'}}>
                <IonCardHeader>
                    <IonCardTitle>
                        <img  className='btn-back' src={backth} alt="" height={"20%"} width={"20%"}/>
                        <img  className='btn-next' src={nextth} alt="" height={"20%"} width={"20%"}/>                                          
                    </IonCardTitle>
                </IonCardHeader>                
            </IonCard>

        </IonPage>
        
        
    );
};

export default Game;
