import {Fragment} from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';


const apps = (props) => {
  return(
    <Fragment>
      <Navigation/>
      <main>
      <Route path='/' component={} exact/>
      <Route path='/favorites' component={}/>
      </main>
    </Fragment>
  );

};

export default App;
