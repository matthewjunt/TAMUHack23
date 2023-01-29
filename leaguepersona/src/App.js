import React from 'react';
import { BrowserRouter as Router, Route, useNavigate } from 'react-router-dom';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Route path="/" element={<Home />} />
    </Router>
  );
}

export default App;