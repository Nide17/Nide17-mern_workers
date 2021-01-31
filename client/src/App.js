import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
import Workers from './components/Workers';
import WorkerModal from './components/WorkerModal';
import { Container } from 'reactstrap';

// Integrate the store into the app
import { Provider } from 'react-redux';
import store from './store';


import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {

  render() {

    return (

      <Provider store={store}>
        <div className="App">

          <AppNavbar />

          <Container>
            <WorkerModal />
            <Workers />
          </Container>

        </div>
      </Provider>
    );

  }

}

export default App;


// Run "npm run dev" to start both backend and frontend concurrently