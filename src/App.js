import React from 'react';
import {Route, Switch} from 'react-router-dom';
import  './App.css';

import {RoomProvider} from './roomContext'
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom/SingleRoom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Switch>
        <RoomProvider>
          <Route path='/' exact component={Home} />
          <Route path='/rooms/' exact component={Rooms} />
          <Route path="/rooms/:slug" exact component={SingleRoom} />
        </RoomProvider>
        
        
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
