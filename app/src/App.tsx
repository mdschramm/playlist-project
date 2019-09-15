import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import { ButtonView, DataView } from './components';

const App: React.FC = () => {

  return (
 <Router>
    <Route exact path="/" component={ButtonView} />
    <Route path="/data" component={DataView} />
</Router>
  );
}

export default App;
