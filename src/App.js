import React from 'react';
import AboutUs from './pages/AboutUs';
import GlobalStyle from './components/GlobalStyle';
import ContactUs from './pages/ContactUs';
import Nav from './components/Nav';
//Router
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav/>
      <Switch>
      <Route path="/" exact>
        <AboutUs  />
      </Route>
      <Route path="/contact">
      <ContactUs/>
      </Route>
      </Switch>
      
    </div>
  );
}

export default App;
