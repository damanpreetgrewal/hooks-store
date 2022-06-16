import {Fragment} from 'react';
import { Route } from 'react-router-dom';

import Navigation from './components/Nav/Navigation';
import Products from './containers/Products';

const App = (props) => {
  return(
    <Fragment>
      <Navigation/>
      <main>
      <Route path='/' component={Products} exact/>
      {/* <Route path='/favorites' component={}/> */}
      </main>
    </Fragment>
  );

};

export default App;
