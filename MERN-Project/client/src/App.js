import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './routes'
import '../node_modules/materialize-css/dist/css/materialize.min.css';
import '../src/index.css';




function App() {
  const routes = useRoutes(false);
  return (
    <Router>
      <div className="container">
        {routes}
      </div>
    </Router>
  )
};

export default App;
