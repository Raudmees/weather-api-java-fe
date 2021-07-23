import { Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Records from './pages/Records'
import Header from './components/Header'
import './App.css';

function App() {
  return (
    <div>
      <Header></Header>
      <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/records'>
      <Records />
      </Route>
      </Switch>
    </div>
  );
}

export default App;
