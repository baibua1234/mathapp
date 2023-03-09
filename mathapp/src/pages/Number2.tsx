import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar ,IonButton ,IonCardContent , IonCard , IonCardHeader,IonCardTitle} from '@ionic/react';
import cat from '../assets/images/cat.png'
import five from '../assets/images/five.png'
import four from '../assets/images/four.png'
import one from '../assets/images/one.png'
import back from '../assets/images/back.png'
import next from '../assets/images/next.png'
import backarrow from '../assets/images/backarrow.png'
import "./Number2.css"
const Number2: React.FC = () => {
    return (
        <IonPage>
             <IonCard style={{backgroundColor: '#DDBD69'}}>
            <div>
                <div>
                    <img className='img-backarrow' src={backarrow} alt="" />       
                </div>

                <div className='ion-text-center'>
                    <p className='quiz'>2.มีรูปภาพแมวทั้งหมดกี่ตัว</p>
                </div>
                
                <div className='ion-text-center'>
                    <img className='img-quiz' src={cat} alt="" />    
                </div>

                <div className='ion-text-center'> 
                    <p className='quiz select-answer'>เลือกคำตอบ</p>
                </div>
                
                <div className='wrap'>
                    <div className='bg-quiz'>
                    <img className='img-answer' src={four} alt="" />       
                </div>
                <div className='bg-quiz'>
                    <img className='img-answer' src={five} alt="" />       
                </div>
                <div className='bg-quiz'>
                    <img className='img-answer' src={one} alt="" />       
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

export default Number2;
