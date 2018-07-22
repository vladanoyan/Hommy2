import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {Provider} from 'mobx-react';
import NavBar from './components/ListingNavbar/index';
import Home from '/imports/ui/components/FilterList/index';
import TodoStore from '/imports/Store/store';

class App extends Component {
  render() {
    return (
      <div>
        <Provider store={TodoStore}>
          <NavBar/>
        </Provider>
        <BrowserRouter>
          <main>
            <Switch>
              <Provider store={TodoStore}>
                <Route exact path="/" component={Home} />
              </Provider>
            </Switch>
          </main>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
