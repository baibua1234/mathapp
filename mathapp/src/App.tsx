import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Menu from './pages/Menu'; 
import Video from './pages/video';
import Exercise from './pages/Exercise';
import Exercisetwo from './pages/Exercisetwo';
import Game from './pages/Game';
import Number from './pages/Number';
import Number2 from './pages/Number2';
import NumberPM from './pages/NumberPM';
import Gameimage from './pages/Gameimage';
import Gameopenimage from './pages/Gameopenimage';
import Matchnumber from './pages/Matchnumber';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Home />
        </Route>

        <Route exact path="/">
          <Redirect to="/home" />
        </Route>

        <Route exact path="/menu">
          <Menu />
          <Redirect to="/menu" />
        </Route>

        <Route exact path='/video'>
            <Video />
            <Redirect to="/video" />
        </Route>  

        <Route exact path='/exercise'>
            <Exercise />
            <Redirect to="/exercise" />
        </Route>

        <Route exact path='/exercisetwo'>
            <Exercisetwo />
            <Redirect to="/exercisetwo" />
        </Route>  

        <Route exact path='/game'>
            <Game />
            <Redirect to="/game" />
        </Route> 

        <Route exact path='/number'>
            <Number />
            <Redirect to="/number" />
        </Route>

        <Route exact path='/number2'>
            <Number2 />
            <Redirect to="/number2" />
        </Route>

        <Route exact path='/numberpm'>
            <NumberPM />
            <Redirect to="/numberpm" />
        </Route> 

        <Route exact path='/gameimage'>
            <Gameimage />
            <Redirect to="/gameimage" />
        </Route> 

        <Route exact path='/gameopenimage'>
            <Gameopenimage />
            <Redirect to="/gameopenimage" />
        </Route> 

        <Route exact path='/matchnumber'>
            <Matchnumber />
            <Redirect to="/matchnumber" />
        </Route> 






      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
