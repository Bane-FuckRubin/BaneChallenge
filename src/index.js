import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Challenge1 from './ChallengePages/Challenge1';
import Challenge2 from './ChallengePages/Challenge2';
import Challenge3 from './ChallengePages/Challenge3';
import Challenge4 from './ChallengePages/Challenge4';
import Challenge5 from './ChallengePages/Challenge5';
import Challenge6 from './ChallengePages/Challenge6';
import Challenge7 from './ChallengePages/Challenge7';
import Challenge8 from './ChallengePages/Challenge8';
import Challenge9 from './ChallengePages/Challenge9';
import Challenge10 from './ChallengePages/Challenge10';
import './index.css';
import LandingPage from './LandingPage';


const routing = (
  <div className="body">
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path='/Challenge1' component={Challenge1} />
        <Route path='/BaneLovesDemMidgets' component={Challenge2} />
        <Route path='/Challenge3' component={Challenge3} />
        <Route path='/Challenge4' component={Challenge4} />
        <Route path='/Challenge5' component={Challenge5} />
        <Route path='/iiilllillllikhkhkkhkhhkhkhkmnmmnnnmnnmnnaeaeaeaaeeaaaaeaqpqpqqpqppqppqppqpqpp' component={Challenge6} />
        <Route path='/Challenge7' component={Challenge7} />
        <Route path='/TitsAreTheGreatest' component={Challenge8} />
        <Route path='/8======D' component={Challenge9} />
        <Route path='/TheGreatestGame' component={Challenge10} />
      </Switch>
    </BrowserRouter>
    </div>
  )
  
  ReactDOM.render(routing
    , document.getElementById('root'));