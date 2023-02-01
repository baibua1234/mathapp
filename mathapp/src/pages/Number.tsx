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
            <div>
                <div>
                    <img className='img-backarrow' src={backarrow} alt="" />       
                </div>
                <div>
                    <p className='quiz'>1.มีรูปภาพเต่าทั้งหมดกี่ตัว</p>
                </div>
                
                <div>
                    <img className='img-quiz' src={ttt} alt="" />       
                </div>

                <div> 
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
            
            {/* button back and next */}
            <IonCard  className='card-footer' style={{backgroundColor: '#B4A48E'}}>
                <IonCardHeader>
                    <IonCardTitle>
                        <img  className='btn-back' src={back} alt="" height={"20%"} width={"20%"}/>
                        <img  className='btn-next' src={next} alt="" height={"20%"} width={"20%"}/>                                          
                    </IonCardTitle>
                </IonCardHeader>                
            </IonCard>

          
      
        </IonPage>
    );
};

export default Number;