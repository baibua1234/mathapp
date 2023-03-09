import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonButton ,IonCardContent , IonCard , IonCardHeader,IonCardTitle} from '@ionic/react';
import ttt from '../assets/images/ttt.png'
import five from '../assets/images/five.png'
import three from '../assets/images/three.png'
import two from '../assets/images/two.png'
import back from '../assets/images/back.png'
import next from '../assets/images/next.png'
import backarrow from '../assets/images/backarrow.png'
import "./Number.css"
const Number: React.FC = () => {
    return (
        <IonPage>
             <IonCard style={{backgroundColor: '#DDBD69'}}>
            <div>
                <div>
                    <img className='img-backarrow' src={backarrow} alt="" />       
                </div>

                <div className='ion-text-center'>
                    <p className='quiz'>1.มีรูปภาพเต่าทั้งหมดกี่ตัว</p>
                </div>
                
                <div className='ion-text-center'>
                    <img className='img-quiz' src={ttt} alt="" />       
                </div>
                
                <div className='ion-text-center'> 
                    <p className='quiz select-answer'>เลือกคำตอบ</p>
                </div>
                
                <div className='wrap'>
                    <div className='bg-quiz'>
                    <img className='img-answer' src={five} alt="" />       
                </div>
                <div className='bg-quiz'>
                    <img className='img-answer' src={three} alt="" />       
                </div>
                <div className='bg-quiz'>
                    <img className='img-answer' src={two} alt="" />       
                </div>

                </div>
            </div>
            </IonCard>
            {/* button back and next */}
            <IonCard  className='card-footer' style={{backgroundColor: '#DDBD69'}}>
                <IonCardHeader>
                    <IonCardTitle>
                    <IonButton href='Number2' fill='clear' color="dark">
                        <img  className='btn-back' src={back} alt="" height={"80%"} width={"80%"}/>
                        <img  className='btn-next' src={next} alt="" height={"80%"} width={"80%"}/>
                    </IonButton>                                          
                    </IonCardTitle>
                </IonCardHeader>                
            </IonCard>

            
      
        </IonPage>
    );
};

export default Number;
