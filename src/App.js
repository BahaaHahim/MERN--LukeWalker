import Components from './components/Components'
import People from './components/People'
import Planet from './components/Planet'

import './App.css';
import { Router } from '@reach/router';

function App() {
  return (
    <div className="App">
    <Components/>
    <Router>
        <People path={"/people/:id"} exact/>
        <Planet path={"/planets/:id"} exact/>
    </Router>
  </div>
  );
}

export default App;
